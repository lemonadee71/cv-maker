// FormBlock, if add: true, additional FormGroup can be added
//    FormGroup
//        Fields

// name === id for our purposes
const formSchema = [
  {
    name: 'personal',
    displayName: 'Personal Information',
    variant: 'outlined',
    // margin: 'dense|none|normal'
    // size : 'medium|small'
    fields: [
      {
        name: 'first-name',
        displayName: 'First name',
        type: 'text',
        required: true,
        autocomplete: true,
      },
      {
        name: 'last-name',
        displayName: 'Last name',
        type: 'text',
        required: true,
        autocomplete: true,
      },
      {
        name: 'address',
        displayName: 'Address',
        type: 'text',
        required: true,
      },
      {
        name: 'phone',
        displayName: 'Phone number',
        type: 'text',
        required: true,
      },
      {
        name: 'email',
        displayName: 'Email',
        type: 'email',
        required: true,
        autocomplete: true,
      },
      {
        name: 'details',
        displayName: 'Details',
        type: 'multiline',
        rows: 5,
      },
      {
        name: 'skills',
        displayName: 'Skills',
        type: 'multiline',
        rows: 3,
      },
    ],
  },
  {
    name: 'experience',
    displayName: 'Experience',
    variant: 'outlined',
    fields: [
      {
        name: 'position',
        displayName: 'Position',
        type: 'text',
        autocomplete: true,
      },
      {
        name: 'company',
        displayName: 'Company',
        type: 'text',
        autocomplete: true,
      },
      {
        name: 'company-address',
        displayName: 'Address',
        type: 'text',
        autocomplete: true,
      },
      {
        name: 'work-start-date',
        displayName: 'From',
        type: 'date',
      },
      {
        name: 'work-end-date',
        displayName: 'To',
        type: 'date',
        helperText: 'Leave this out if still working at present',
      },
      {
        name: 'job-description',
        displayName: 'Job description',
        type: 'multiline',
        rows: 5,
      },
    ],
  },
  {
    name: 'education',
    displayName: 'Education',
    variant: 'outlined',
    fields: [
      {
        name: 'university',
        displayName: 'University',
        type: 'text',
        autocomplete: true,
      },
      {
        name: 'univ-address',
        displayName: 'Address',
        type: 'text',
      },
      {
        name: 'degree',
        displayName: 'Degree',
        type: 'text',
        autocomplete: true,
      },
      {
        name: 'school-start-date',
        displayName: 'From',
        type: 'date',
      },
      {
        name: 'school-end-date',
        displayName: 'To',
        type: 'date',
      },
    ],
  },
];

export default formSchema;
