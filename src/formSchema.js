// name === id for our purposes
const formSchema = [
  {
    name: 'personal',
    displayName: 'Personal Information',
    variant: 'outlined',
    muiStyle: {
      spacing: 1,
    },
    fixed: true,
    fields: [
      {
        name: 'firstName',
        displayName: 'First name',
        type: 'text',
        required: true,
        autocomplete: true,
        muiStyle: {
          xs: 7,
          sm: 4,
          md: 5,
        },
      },
      {
        name: 'middleInitial',
        displayName: 'Middle initial',
        type: 'text',
        autocomplete: true,
        muiStyle: {
          xs: 5,
          sm: 4,
          md: 2,
        },
      },
      {
        name: 'lastName',
        displayName: 'Last name',
        type: 'text',
        required: true,
        autocomplete: true,
        muiStyle: {
          xs: 12,
          sm: 4,
          md: 5,
        },
      },
      {
        name: 'address',
        displayName: 'Address',
        type: 'text',
        required: true,
        muiStyle: {
          xs: 12,
        },
      },
      {
        name: 'phone',
        displayName: 'Phone number',
        type: 'text',
        required: true,
        muiStyle: {
          xs: 12,
          sm: 6,
        },
      },
      {
        name: 'email',
        displayName: 'Email',
        type: 'email',
        required: true,
        autocomplete: true,
        muiStyle: {
          xs: 12,
          sm: 6,
        },
      },
      {
        name: 'details',
        displayName: 'Details',
        type: 'multiline',
        rows: 5,
        muiStyle: {
          xs: 12,
        },
      },
      {
        name: 'skills',
        displayName: 'Skills',
        type: 'multiline',
        helperText: 'Separate different skills with comma',
        rows: 3,
        muiStyle: {
          xs: 12,
        },
      },
    ],
  },
  {
    name: 'experience',
    displayName: 'Experience',
    variant: 'outlined',
    muiStyle: {
      spacing: 2,
    },
    fields: [
      {
        name: 'position',
        displayName: 'Position',
        type: 'text',
        autocomplete: true,
        muiStyle: {
          xs: 12,
          sm: 6,
        },
      },
      {
        name: 'company',
        displayName: 'Company',
        type: 'text',
        autocomplete: true,
        muiStyle: {
          xs: 12,
          sm: 6,
        },
      },
      {
        name: 'companyAddress',
        displayName: 'Address',
        type: 'text',
        autocomplete: true,
        muiStyle: {
          xs: 12,
        },
      },
      {
        name: 'workStartDate',
        displayName: 'From',
        type: 'date',
        muiStyle: {
          xs: 6,
        },
      },
      {
        name: 'workEndDate',
        displayName: 'To',
        type: 'date',
        helperText: 'Leave this out if still working at present',
        muiStyle: {
          xs: 6,
        },
      },
      {
        name: 'jobDescription',
        displayName: 'Job description',
        type: 'multiline',
        rows: 5,
        muiStyle: {
          xs: 12,
        },
      },
    ],
  },
  {
    name: 'education',
    displayName: 'Education',
    variant: 'outlined',
    muiStyle: {
      spacing: 2,
    },

    fields: [
      {
        name: 'university',
        displayName: 'University',
        type: 'text',
        autocomplete: true,
        muiStyle: {
          xs: 12,
        },
      },
      {
        name: 'universityAddress',
        displayName: 'Address',
        type: 'text',
        muiStyle: {
          xs: 12,
        },
      },
      {
        name: 'degree',
        displayName: 'Degree',
        type: 'text',
        autocomplete: true,
        muiStyle: {
          xs: 12,
        },
      },
      {
        name: 'schoolStartDate',
        displayName: 'From',
        type: 'date',
        muiStyle: {
          xs: 6,
        },
      },
      {
        name: 'schoolEndDate',
        displayName: 'To',
        type: 'date',
        muiStyle: {
          xs: 6,
        },
      },
    ],
  },
];

export default formSchema;
