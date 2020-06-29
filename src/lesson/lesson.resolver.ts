import { Resolver, Query } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver(() => LessonType)
export class LessonResolver {
  @Query(() => LessonType)
  lesson(): LessonType {
    return {
      id: '1',
      name: 'Math lesson',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }
}
