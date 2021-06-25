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
            xs: 12,
            sm: 6,
          },
        },
        validate: (str) => {
          if (str !== 'Shin') return 'You impostor';

          return '';
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
            sm: 6,
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
        type: 'phoneNumber',
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
          rows: 5,
          span: {
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

export default formSchema;
