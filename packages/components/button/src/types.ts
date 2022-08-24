import type { ExtractPropTypes } from 'vue';
import { ButtonProps } from './props';

export type Size = 'small' | 'middle' | 'large'
export type Type = 'default' | 'primary' | 'dashed' | 'text' | 'outline'
export type Status = 'default' | 'success' | 'warning' | 'danger'

export type ButtonPropsType = ExtractPropTypes<typeof ButtonProps>