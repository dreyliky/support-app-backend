import { BaseUserInfo } from '../../user';
import { SupportCreationInfo } from './support-creation-info.interface';

export interface SupportDbInfo extends SupportCreationInfo, BaseUserInfo {}
