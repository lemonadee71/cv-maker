import React from 'react';

const PersonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-user"
    width="68"
    height="68"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="#00abfb"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <circle cx="12" cy="7" r="4" />
    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
  </svg>
);

const WorkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-briefcase"
    width="68"
    height="68"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="#00abfb"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
    <line x1="12" y1="12" x2="12" y2="12.01" />
    <path d="M3 13a20 20 0 0 0 18 0" />
  </svg>
);

const EducationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-school"
    width="68"
    height="68"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="#00abfb"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
    <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
  </svg>
);

export { PersonIcon, WorkIcon, EducationIcon };
