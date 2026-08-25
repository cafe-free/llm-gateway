import { Type } from 'typebox';

export const HealthResponseSchema = Type.Object({
    status: Type.Literal('ok'),
    service: Type.String(),
    timestamp: Type.String(),
});

// export type HealthResponse = typeof HealthResponseSchema.static;