const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const validateLength = (allowableLength) => (str) =>
  str.length > allowableLength
    ? `Must be less than ${allowableLength} characters`
    : '';

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
        autocomplete: true,
        muiStyle: {
          span: {
            xs: 12,
          },
        },
      },
      phone: {
        type: 'phone',
        displayName: 'Phone number',
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
        validate: (str) =>
          emailRegex.test(str) ? '' : 'Invalid email address',
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
        validate: validateLength(500),
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
        validate: validateLength(500),
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
