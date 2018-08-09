import { Type } from './Type';
import { Chapter } from './Chapter';

export class Manga {
    idManga: number;
    nameManga: string;
    description: string;
    preImage: string;
    tags: Type[];
    chapter: Chapter[];
}
