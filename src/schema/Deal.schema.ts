export type SDeal<IsDetail extends boolean = false> = {
  id: number;
  title: string;
  imgURL: string;
  price: number;
  likesCount: number;
  location: string;
} & (IsDetail extends true
  ? {
    seller: {
      avatarImgURL: string;
      email: string;
    }

    createdAt: number;
    content: string;
    viewsCount: number;
  }
  : {});