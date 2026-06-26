# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: unstable-survey.test.ts >> Fill out a survey
- Location: tests/unstable-survey.test.ts:4:5

# Error details

```
Error: click execution failed: {
  "isSuccessful": false,
  "forLlm": "FAILED! Unable to resolve HTML element to operate with.",
  "metadata": {
    "selector": {
      "element": [
        ".//button[normalize-space(.)='Submit']",
        "div.mt-8 > button:nth-of-type(2)",
        "div.bg-white > div:nth-of-type(2) > button:nth-of-type(2)"
      ]
    }
  }
}
```

# Page snapshot

```yaml
- generic [ref=e4]:
  - banner [ref=e5]:
    - heading "Survey Form" [level=1] [ref=e6]
    - paragraph [ref=e7]: Please complete this short survey
  - generic [ref=e13]:
    - generic [ref=e14]:
      - generic [ref=e15]: "1"
      - generic [ref=e16]: Survey
    - generic [ref=e17]:
      - generic [ref=e18]: "2"
      - generic [ref=e19]: Selection
    - generic [ref=e20]:
      - generic [ref=e21]: "3"
      - generic [ref=e22]: Thank You
  - generic [ref=e24]:
    - generic [ref=e25]: "Current Time:"
    - generic [ref=e26]:
      - generic [ref=e27]: 12:50:16
      - generic [ref=e28]: Set 1
  - generic [ref=e29]:
    - heading "Tell us about yourself" [level=2] [ref=e30]
    - generic [ref=e31]:
      - generic [ref=e32]:
        - generic [ref=e33]: Last Name *
        - textbox "Last Name *" [active] [invalid] [ref=e34]:
          - /placeholder: Enter your last name
        - paragraph [ref=e35]: Name is required
      - generic [ref=e36]:
        - generic [ref=e37]: Email Address *
        - textbox "Email Address *" [invalid] [ref=e38]:
          - /placeholder: Enter your email address
        - paragraph [ref=e39]: Please enter a valid email
      - generic [ref=e40]:
        - generic [ref=e41]: Age Group *
        - radiogroup [invalid] [ref=e42]:
          - generic [ref=e43]:
            - radio "18-24" [ref=e44] [cursor=pointer]
            - radio
            - generic [ref=e45]: 18-24
          - generic [ref=e46]:
            - radio "25-34" [ref=e47] [cursor=pointer]
            - radio
            - generic [ref=e48]: 25-34
          - generic [ref=e49]:
            - radio "35-44" [ref=e50] [cursor=pointer]
            - radio
            - generic [ref=e51]: 35-44
          - generic [ref=e52]:
            - radio "45-54" [ref=e53] [cursor=pointer]
            - radio
            - generic [ref=e54]: 45-54
          - generic [ref=e55]:
            - radio "55+" [ref=e56] [cursor=pointer]
            - radio
            - generic [ref=e57]: 55+
        - paragraph [ref=e58]: Age group is required
      - generic [ref=e59]:
        - generic [ref=e61]: How did you hear about us? *
        - generic [ref=e62]:
          - generic [ref=e63]:
            - checkbox "Social Media" [invalid] [ref=e64] [cursor=pointer]
            - checkbox
            - generic [ref=e65]: Social Media
          - generic [ref=e66]:
            - checkbox "Search Engine" [invalid] [ref=e67] [cursor=pointer]
            - checkbox
            - generic [ref=e68]: Search Engine
          - generic [ref=e69]:
            - checkbox "Friend Referral" [invalid] [ref=e70] [cursor=pointer]
            - checkbox
            - generic [ref=e71]: Friend Referral
          - generic [ref=e72]:
            - checkbox "Other" [invalid] [ref=e73] [cursor=pointer]
            - checkbox
            - generic [ref=e74]: Other
        - paragraph [ref=e75]: Please select at least one option
      - generic [ref=e76]:
        - text: Additional Comments (Optional)
        - textbox "Additional Comments (Optional)" [ref=e77]:
          - /placeholder: Share any additional thoughts or comments
      - button "Next" [ref=e79] [cursor=pointer]
  - region "Notifications (F8)":
    - list
```

# Test source

```ts
  8   | module.exports = {
  9   |   caches: [
  10  |     {
  11  |       pageUrl: 'unstable-survey-dinoer.replit.app',
  12  |       instruction:
  13  |         'Fill out the all of the survey questions with fake data go through\nthe submission process until you get to a "Thank You" page.',
  14  |       schema: {
  15  |         $schema: 'https://json-schema.org/draft/2020-12/schema',
  16  |         type: 'object',
  17  |         properties: {
  18  |           surveyData: {
  19  |             type: 'array',
  20  |             items: {
  21  |               type: 'object',
  22  |               properties: {
  23  |                 question: { type: 'string' },
  24  |                 response: { type: 'string' },
  25  |               },
  26  |               required: ['question', 'response'],
  27  |               additionalProperties: false,
  28  |             },
  29  |           },
  30  |         },
  31  |         required: ['surveyData'],
  32  |         additionalProperties: false,
  33  |       },
  34  |       allowedTools: [],
  35  |       maxToolCalls: 50,
  36  |       run: async ({ page }) => {
  37  |         // Entering a fake name into the name input field to fill out the survey form.
  38  |         await page
  39  |           .find('#\\:rj\\:-form-item', {
  40  |             failover: [
  41  |               ".//label[normalize-space()='Your Name *']/following-sibling::input",
  42  |               "[name='name']",
  43  |             ],
  44  |           })
  45  |           .inputFaker('person.fullName');
  46  | 
  47  |         // Entering a fake email into the contact email field to fill out the survey form.
  48  |         await page
  49  |           .find('#\\:rk\\:-form-item', {
  50  |             failover: [
  51  |               ".//label[normalize-space()='Contact Email *']/following-sibling::input",
  52  |               "[name='email']",
  53  |             ],
  54  |           })
  55  |           .inputFaker('internet.email');
  56  | 
  57  |         // Clicking the occupation dropdown to open it and select an occupation.
  58  |         await page
  59  |           .find('#\\:rl\\:-form-item', {
  60  |             failover: [
  61  |               ".//button[normalize-space(.)='Select your occupation']",
  62  |               "[role='combobox']",
  63  |             ],
  64  |           })
  65  |           .click('left');
  66  | 
  67  |         // Selecting 'Employed' from the occupation dropdown.
  68  |         await page
  69  |           .find('#radix-\\:rm\\: > div > div:nth-of-type(2)', {
  70  |             failover: [
  71  |               ".//div[normalize-space(.)='Employed']",
  72  |               "[role='presentation'] > div:nth-of-type(2)",
  73  |             ],
  74  |           })
  75  |           .click('left');
  76  | 
  77  |         // Scrolling down to see the rest of the survey questions on the page.
  78  |         await page.find('html').scroll('DOWN');
  79  | 
  80  |         // Selecting the 'Technology' checkbox under interests.
  81  |         await page
  82  |           .find('#\\:ro\\:-form-item', {
  83  |             failover: [
  84  |               "div:nth-of-type(1) > [role='checkbox']",
  85  |               "div:nth-of-type(1) > [data-state='unchecked']",
  86  |             ],
  87  |           })
  88  |           .click('left');
  89  | 
  90  |         // Entering some suggestions/comments in the optional suggestions box.
  91  |         await page
  92  |           .find('#\\:rs\\:-form-item', {
  93  |             failover: [
  94  |               ".//label[normalize-space()='Suggestions (Optional)']/following-sibling::textarea",
  95  |               "[name='comments']",
  96  |             ],
  97  |           })
  98  |           .inputFaker('lorem.sentence');
  99  | 
  100 |         // Clicking 'Next' to proceed to the next page of the survey.
  101 |         await page
  102 |           .find(".//button[normalize-space(.)='Next']", {
  103 |             failover: ['button.inline-flex', 'div.mt-8 > button'],
  104 |           })
  105 |           .click('left');
  106 | 
  107 |         // Clicking the 'Submit' button to submit the survey form and proceed to the 'Thank You' page.
> 108 |         await page
      |         ^ Error: click execution failed: {
  109 |           .find(".//button[normalize-space(.)='Submit']", {
  110 |             failover: [
  111 |               'div.mt-8 > button:nth-of-type(2)',
  112 |               'div.bg-white > div:nth-of-type(2) > button:nth-of-type(2)',
  113 |             ],
  114 |           })
  115 |           .click('left');
  116 | 
  117 |         // Marking objective as complete since the survey has been successfully submitted and the 'Thank You' page is reached.
  118 |         await page.run('markObjectiveComplete', {
  119 |           details:
  120 |             "Completed all survey questions with fake data and successfully reached the 'Thank You!' page.",
  121 |         });
  122 |       },
  123 |     },
  124 |   ],
  125 | };
  126 | 
```