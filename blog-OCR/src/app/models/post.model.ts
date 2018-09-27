export class Post {
  created_at: number;
  loveIts: number;
  postBy: string;

  constructor(public titre: string, public contenu: string) {}
}
