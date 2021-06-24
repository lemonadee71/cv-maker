const formSchema = {
  personal: {
    displayName: 'Personal Information',
    muiStyle: {
      variant: 'outlined',
    },
    fields: {
      firstName: {
        type: 'text',
        displayName: 'First name',
        required: true,
        autocomplete: true,
        muiStyle: {
          span: {
            xs: 7,
            sm: 4,
            md: 5,
          },
        },
      },
      lastName: {
        type: 'text',
        displayName: 'Last name',
        required: true,
        autocomplete: true,
        muiStyle: {
          span: {
            xs: 12,
            sm: 4,
            md: 5,
          },
        },
      },
      address: {
        type: 'text',
        displayName: 'Address',
        required: true,
        muiStyle: {
          span: {
            xs: 12,
          },
        },
      },
      phone: {
        type: 'text',
        displayName: 'Phone number',
        required: true,
        muiStyle: {
          span: {
            xs: 12,
            sm: 6,
          },
        },
      },
      email: {
        type: 'email',
        displayName: 'Email',
        required: true,
        autocomplete: true,
        muiStyle: {
          span: {
            xs: 12,
            sm: 6,
          },
        },
      },
      details: {
        type: 'multiline',
        displayName: 'Details',
        muiStyle: {
          span: {
            rows: 5,
            xs: 12,
          },
        },
      },
      skills: {
        type: 'multiline',
        displayName: 'Skills',
        helperText: 'Separate different skills with comma',
        muiStyle: {
          rows: 3,
          span: {
            xs: 12,
          },
        },
      },
    },
  },
  experience: {
    displayName: 'Experience',
    muiStyle: {
      variant: 'outlined',
    },
    multiple: true,
    fields: {
      position: {
        type: 'text',
        displayName: 'Position',
        autocomplete: true,
        muiStyle: {
          span: {
            xs: 12,
            sm: 6,
          },
        },
      },
      company: {
        type: 'text',
        displayName: 'Company',
        autocomplete: true,
        muiStyle: {
          span: {
            xs: 12,
            sm: 6,
          },
        },
      },
      address: {
        type: 'text',
        displayName: 'Address',
        autocomplete: true,
        muiStyle: {
          span: {
            xs: 12,
          },
        },
      },
      startDate: {
        type: 'date',
        displayName: 'From',
        muiStyle: {
          span: {
            xs: 12,
            sm: 6,
          },
        },
      },
      endDate: {
        type: 'date',
        displayName: 'To',
        helperText: 'Leave this out if still working at present',
        muiStyle: {
          span: {
            xs: 12,
            sm: 6,
          },
        },
      },
      description: {
        type: 'multiline',
        displayName: 'Job description',
        muiStyle: {
          rows: 5,
          span: {
            xs: 12,
          },
        },
      },
    },
  },
  education: {
    displayName: 'Education',
    muiStyle: {
      variant: 'outlined',
    },
    multiple: true,
    fields: {
      school: {
        type: 'text',
        displayName: 'School',
        autocomplete: true,
        muiStyle: {
          span: {
            xs: 12,
          },
        },
      },
      address: {
        type: 'text',
        displayName: 'Address',
        muiStyle: {
          span: {
            xs: 12,
          },
        },
      },
      degree: {
        type: 'text',
        displayName: 'Degree',
        autocomplete: true,
        muiStyle: {
          span: {
            xs: 12,
          },
        },
      },
      startDate: {
        type: 'date',
        displayName: 'From',
        muiStyle: {
          span: {
            xs: 12,
            sm: 6,
          },
        },
      },
      endDate: {
        type: 'date',
        displayName: 'To',
        muiStyle: {
          span: {
            xs: 12,
            sm: 6,
          },
        },
      },
    },
  },
};

// name === id for our purposes
const formSchemaV1 = [
  {
    name: 'personal',
    displayName: 'Personal Information',
    variant: 'outlined',
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
          xs: 12,
          sm: 6,
        },
      },
      {
        name: 'workEndDate',
        displayName: 'To',
        type: 'date',
        helperText: 'Leave this out if still working at present',
        muiStyle: {
          xs: 12,
          sm: 6,
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
          xs: 12,
          sm: 6,
        },
      },
      {
        name: 'schoolEndDate',
        displayName: 'To',
        type: 'date',
        muiStyle: {
          xs: 12,
          sm: 6,
        },
      },
    ],
  },
];

export default formSchema;
