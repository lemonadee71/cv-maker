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
        name: 'firstName',
        displayName: 'First name',
        type: 'text',
        required: true,
        autocomplete: true,
      },
      {
        name: 'lastName',
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
        helperText: 'Separate different skills with comma',
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
        name: 'companyAddress',
        displayName: 'Address',
        type: 'text',
        autocomplete: true,
      },
      {
        name: 'workStartDate',
        displayName: 'From',
        type: 'date',
      },
      {
        name: 'workEndDate',
        displayName: 'To',
        type: 'date',
        helperText: 'Leave this out if still working at present',
      },
      {
        name: 'jobDescription',
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
        name: 'universityAddress',
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
        name: 'schoolStartDate',
        displayName: 'From',
        type: 'date',
      },
      {
        name: 'schoolEndDate',
        displayName: 'To',
        type: 'date',
      },
    ],
  },
];

export default formSchema;
