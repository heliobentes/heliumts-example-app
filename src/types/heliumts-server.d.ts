/* eslint-disable */
/**
* Auto generated file - DO NOT EDIT!
* # Helium Server Type Definitions    
**/
import type { getServerEnv as getServerEnv_0x6chhi } from '../server/env';
import type { getIP as getIP_1gssstn } from '../server/get-ip';
import type { getProfile as getProfile_2lhnpa5 } from '../server/profile';
import type { updateProfile as updateProfile_3ipc7is } from '../server/profile';
import type { getTasks as getTasks_4vp0215 } from '../server/tasks/index';
import type { getTaskById as getTaskById_55y77yp } from '../server/tasks/index';
import type { updateTaskStatus as updateTaskStatus_6hpqxr9 } from '../server/tasks/index';
import type { createTask as createTask_7m7smn3 } from '../server/tasks/index';
import type { deleteTask as deleteTask_80nlfva } from '../server/tasks/index';
import type { editTask as editTask_9te6xna } from '../server/tasks/index';

declare module 'heliumts/server' {
export const getServerEnv: import('heliumts/client').MethodStub<
    Parameters<typeof getServerEnv_0x6chhi['handler']>[0],
    Awaited<ReturnType<typeof getServerEnv_0x6chhi['handler']>>
>;
export const getIP: import('heliumts/client').MethodStub<
    Parameters<typeof getIP_1gssstn['handler']>[0],
    Awaited<ReturnType<typeof getIP_1gssstn['handler']>>
>;
export const getProfile: import('heliumts/client').MethodStub<
    Parameters<typeof getProfile_2lhnpa5['handler']>[0],
    Awaited<ReturnType<typeof getProfile_2lhnpa5['handler']>>
>;
export const updateProfile: import('heliumts/client').MethodStub<
    Parameters<typeof updateProfile_3ipc7is['handler']>[0],
    Awaited<ReturnType<typeof updateProfile_3ipc7is['handler']>>
>;
export const getTasks: import('heliumts/client').MethodStub<
    Parameters<typeof getTasks_4vp0215['handler']>[0],
    Awaited<ReturnType<typeof getTasks_4vp0215['handler']>>
>;
export const getTaskById: import('heliumts/client').MethodStub<
    Parameters<typeof getTaskById_55y77yp['handler']>[0],
    Awaited<ReturnType<typeof getTaskById_55y77yp['handler']>>
>;
export const updateTaskStatus: import('heliumts/client').MethodStub<
    Parameters<typeof updateTaskStatus_6hpqxr9['handler']>[0],
    Awaited<ReturnType<typeof updateTaskStatus_6hpqxr9['handler']>>
>;
export const createTask: import('heliumts/client').MethodStub<
    Parameters<typeof createTask_7m7smn3['handler']>[0],
    Awaited<ReturnType<typeof createTask_7m7smn3['handler']>>
>;
export const deleteTask: import('heliumts/client').MethodStub<
    Parameters<typeof deleteTask_80nlfva['handler']>[0],
    Awaited<ReturnType<typeof deleteTask_80nlfva['handler']>>
>;
export const editTask: import('heliumts/client').MethodStub<
    Parameters<typeof editTask_9te6xna['handler']>[0],
    Awaited<ReturnType<typeof editTask_9te6xna['handler']>>
>;
}
