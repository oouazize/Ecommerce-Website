import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUserId = createParamDecorator((data: undefined, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user['sub'];
});
