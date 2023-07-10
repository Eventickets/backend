import { JwtPayload } from '@modules/auth/types';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';


export const GetCurrentUserId = createParamDecorator(
  (_: undefined, context: ExecutionContext): number => {
    const request = context.switchToHttp().getRequest();
    const user = request.user as JwtPayload;
    return user.sub;
  },
);