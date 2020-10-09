import { ApiProperty } from '@nestjs/swagger';
export class CreateMovieDto {
    @ApiProperty()
    readonly title: string;

    @ApiProperty()
    readonly author: string;
}