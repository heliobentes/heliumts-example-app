/* eslint-disable */
/**
* Auto generated file - DO NOT EDIT!
* # Helium Server Type Definitions
*
* @helium-methods createTask, deleteTask, editTask, getIP, getProfile, getServerEnv, getTaskById, getTasks, updateProfile, updateTaskStatus
**/
import type { createTask as __helium_method_0 } from '../server/tasks/index';
import type { deleteTask as __helium_method_1 } from '../server/tasks/index';
import type { editTask as __helium_method_2 } from '../server/tasks/index';
import type { getIP as __helium_method_3 } from '../server/get-ip';
import type { getProfile as __helium_method_4 } from '../server/profile';
import type { getServerEnv as __helium_method_5 } from '../server/env';
import type { getTaskById as __helium_method_6 } from '../server/tasks/index';
import type { getTasks as __helium_method_7 } from '../server/tasks/index';
import type { updateProfile as __helium_method_8 } from '../server/profile';
import type { updateTaskStatus as __helium_method_9 } from '../server/tasks/index';

declare module 'heliumts/server' {
    // Method stubs for client-side type inference
    export const createTask: import('heliumts/client').MethodStub<
        Parameters<typeof __helium_method_0['handler']>[0],
        Awaited<ReturnType<typeof __helium_method_0['handler']>>
    >;
    export const deleteTask: import('heliumts/client').MethodStub<
        Parameters<typeof __helium_method_1['handler']>[0],
        Awaited<ReturnType<typeof __helium_method_1['handler']>>
    >;
    export const editTask: import('heliumts/client').MethodStub<
        Parameters<typeof __helium_method_2['handler']>[0],
        Awaited<ReturnType<typeof __helium_method_2['handler']>>
    >;
    export const getIP: import('heliumts/client').MethodStub<
        Parameters<typeof __helium_method_3['handler']>[0],
        Awaited<ReturnType<typeof __helium_method_3['handler']>>
    >;
    export const getProfile: import('heliumts/client').MethodStub<
        Parameters<typeof __helium_method_4['handler']>[0],
        Awaited<ReturnType<typeof __helium_method_4['handler']>>
    >;
    export const getServerEnv: import('heliumts/client').MethodStub<
        Parameters<typeof __helium_method_5['handler']>[0],
        Awaited<ReturnType<typeof __helium_method_5['handler']>>
    >;
    export const getTaskById: import('heliumts/client').MethodStub<
        Parameters<typeof __helium_method_6['handler']>[0],
        Awaited<ReturnType<typeof __helium_method_6['handler']>>
    >;
    export const getTasks: import('heliumts/client').MethodStub<
        Parameters<typeof __helium_method_7['handler']>[0],
        Awaited<ReturnType<typeof __helium_method_7['handler']>>
    >;
    export const updateProfile: import('heliumts/client').MethodStub<
        Parameters<typeof __helium_method_8['handler']>[0],
        Awaited<ReturnType<typeof __helium_method_8['handler']>>
    >;
    export const updateTaskStatus: import('heliumts/client').MethodStub<
        Parameters<typeof __helium_method_9['handler']>[0],
        Awaited<ReturnType<typeof __helium_method_9['handler']>>
    >;
}
