/* eslint-disable */
/**
* Auto generated file - DO NOT EDIT!
* # Helium Server Type Definitions    
**/
import type { getServerEnv as getServerEnv_08bjtzp } from '../server/env';
import type { getIP as getIP_1xmqohp } from '../server/get-ip';
import type { getProfile as getProfile_2afu7wc } from '../server/profile';
import type { updateProfile as updateProfile_3op8b80 } from '../server/profile';
import type { getTasks as getTasks_4q0ru6h } from '../server/tasks/index';
import type { getTaskById as getTaskById_50gc4wa } from '../server/tasks/index';
import type { updateTaskStatus as updateTaskStatus_6apei59 } from '../server/tasks/index';
import type { createTask as createTask_7moumst } from '../server/tasks/index';
import type { deleteTask as deleteTask_840wdsj } from '../server/tasks/index';
import type { editTask as editTask_9u2gtyd } from '../server/tasks/index';

declare module 'heliumts/server' {
export const getServerEnv: import('heliumts/client').MethodStub<
    Parameters<typeof getServerEnv_08bjtzp['handler']>[0],
    Awaited<ReturnType<typeof getServerEnv_08bjtzp['handler']>>
>;
export const getIP: import('heliumts/client').MethodStub<
    Parameters<typeof getIP_1xmqohp['handler']>[0],
    Awaited<ReturnType<typeof getIP_1xmqohp['handler']>>
>;
export const getProfile: import('heliumts/client').MethodStub<
    Parameters<typeof getProfile_2afu7wc['handler']>[0],
    Awaited<ReturnType<typeof getProfile_2afu7wc['handler']>>
>;
export const updateProfile: import('heliumts/client').MethodStub<
    Parameters<typeof updateProfile_3op8b80['handler']>[0],
    Awaited<ReturnType<typeof updateProfile_3op8b80['handler']>>
>;
export const getTasks: import('heliumts/client').MethodStub<
    Parameters<typeof getTasks_4q0ru6h['handler']>[0],
    Awaited<ReturnType<typeof getTasks_4q0ru6h['handler']>>
>;
export const getTaskById: import('heliumts/client').MethodStub<
    Parameters<typeof getTaskById_50gc4wa['handler']>[0],
    Awaited<ReturnType<typeof getTaskById_50gc4wa['handler']>>
>;
export const updateTaskStatus: import('heliumts/client').MethodStub<
    Parameters<typeof updateTaskStatus_6apei59['handler']>[0],
    Awaited<ReturnType<typeof updateTaskStatus_6apei59['handler']>>
>;
export const createTask: import('heliumts/client').MethodStub<
    Parameters<typeof createTask_7moumst['handler']>[0],
    Awaited<ReturnType<typeof createTask_7moumst['handler']>>
>;
export const deleteTask: import('heliumts/client').MethodStub<
    Parameters<typeof deleteTask_840wdsj['handler']>[0],
    Awaited<ReturnType<typeof deleteTask_840wdsj['handler']>>
>;
export const editTask: import('heliumts/client').MethodStub<
    Parameters<typeof editTask_9u2gtyd['handler']>[0],
    Awaited<ReturnType<typeof editTask_9u2gtyd['handler']>>
>;
}
