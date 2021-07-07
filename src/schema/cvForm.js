import styles from './styles';

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const validateLength = (allowableLength) => (str) =>
  str.length > allowableLength
    ? `Must be less than ${allowableLength} characters`
    : '';

const cvFormSchema = {
  personal: {
    displayName: 'Personal Information',
    muiStyle: {
      ...styles.block,
    },
    fields: {
      firstName: {
        type: 'text',
        displayName: 'First name',
        required: true,
        autocomplete: true,
        muiStyle: {
          ...styles.field.halfWidth,
        },
      },
      lastName: {
        type: 'text',
        displayName: 'Last name',
        required: true,
        autocomplete: true,
        muiStyle: {
          ...styles.field.halfWidth,
        },
      },
      title: {
        type: 'text',
        displayName: 'Title',
        autocomplete: true,
        muiStyle: {
          ...styles.field.halfWidth,
        },
      },
      email: {
        type: 'email',
        displayName: 'Email',
        required: true,
        autocomplete: true,
        muiStyle: {
          ...styles.field.halfWidth,
        },
        validate: (str) =>
          emailRegex.test(str) ? '' : 'Invalid email address',
      },
      phone: {
        type: 'phone',
        displayName: 'Phone number',
        muiStyle: {
          ...styles.field.halfWidth,
        },
      },
      address: {
        type: 'text',
        displayName: 'Address',
        autocomplete: true,
        muiStyle: {
          ...styles.field.fullWidth,
        },
      },
      details: {
        type: 'multiline',
        displayName: 'Profile',
        placeholder: 'About yourself',
        muiStyle: {
          ...styles.field.fullWidth,
          rows: 5,
        },
        validate: validateLength(500),
      },
      skills: {
        type: 'multiline',
        displayName: 'Skills',
        helperText: 'Separate different skills with comma',
        muiStyle: {
          ...styles.field.fullWidth,
          rows: 3,
        },
        validate: (str) => {
          const validate = validateLength(50);
          return str.split(',').some((skill) => validate(skill.trim()))
            ? 'Individual skill must be less than 50 characters'
            : '';
        },
      },
    },
  },
  experience: {
    displayName: 'Experience',
    muiStyle: {
      ...styles.block,
    },
    multiple: true,
    fields: {
      position: {
        type: 'text',
        displayName: 'Position',
        required: true,
        autocomplete: true,
        muiStyle: {
          ...styles.field.halfWidth,
        },
      },
      company: {
        type: 'text',
        displayName: 'Company',
        required: true,
        autocomplete: true,
        muiStyle: {
          ...styles.field.halfWidth,
        },
      },
      description: {
        type: 'multiline',
        displayName: 'Job description',
        muiStyle: {
          ...styles.field.fullWidth,
          rows: 5,
        },
        validate: validateLength(500),
      },
      startDate: {
        type: 'date',
        displayName: 'From',
        muiStyle: {
          ...styles.field.halfWidth,
        },
      },
      endDate: {
        type: 'date',
        displayName: 'To',
        helperText: 'Leave this out if still working at present',
        muiStyle: {
          ...styles.field.halfWidth,
        },
      },
    },
  },
  education: {
    displayName: 'Education',
    muiStyle: {
      ...styles.block,
    },
    multiple: true,
    defaultGroups: 0,
    fields: {
      school: {
        type: 'text',
        displayName: 'School',
        required: true,
        autocomplete: true,
        muiStyle: {
          ...styles.field.fullWidth,
        },
      },
      degree: {
        type: 'text',
        displayName: 'Degree',
        autocomplete: true,
        muiStyle: {
          ...styles.field.fullWidth,
        },
      },
      startDate: {
        type: 'date',
        displayName: 'From',
        muiStyle: {
          ...styles.field.halfWidth,
        },
      },
      endDate: {
        type: 'date',
        displayName: 'To',
        muiStyle: {
          ...styles.field.halfWidth,
        },
      },
    },
  },
  training: {
    displayName: 'Training / Certifications',
    muiStyle: {
      variant: 'outlined',
    },
    multiple: true,
    defaultGroups: 0,
    fields: {
      name: {
        type: 'text',
        displayName: 'Name',
        placeholder: 'Training / Certificate',
        required: true,
        autocomplete: true,
        muiStyle: {
          ...styles.field.fullWidth,
        },
      },
      startDate: {
        type: 'date',
        displayName: 'From',
        muiStyle: {
          ...styles.field.halfWidth,
        },
      },
      endDate: {
        type: 'date',
        displayName: 'To',
        muiStyle: {
          ...styles.field.halfWidth,
        },
      },
    },
  },
};

export default cvFormSchema;
