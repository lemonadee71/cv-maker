import React from 'react';
import { Svg, Path, Circle, Rect, Line } from '@react-pdf/renderer';

const PersonIcon = ({ height, width }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-user"
    width={width || '68'}
    height={height || '68'}
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="#00abfb"
    fill="white"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <Circle cx="12" cy="7" r="4" />
    <Path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
  </Svg>
);

const WorkIcon = ({ height, width }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-briefcase"
    width={width || '68'}
    height={height || '68'}
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="#00abfb"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <Rect x="3" y="7" width="18" height="13" rx="2" />
    <Path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
    <Line x1="12" y1="12" x2="12" y2="12.01" />
    <Path d="M3 13a20 20 0 0 0 18 0" />
  </Svg>
);

const EducationIcon = ({ width, height }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-school"
    width={width || '68'}
    height={height || '68'}
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="#00abfb"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <Path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
    <Path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
  </Svg>
);

export { PersonIcon, WorkIcon, EducationIcon };
