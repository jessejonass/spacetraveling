export type Post = {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
};

export type PostPagination = {
  next_page: string;
  results: Post[];
};

export type HomeProps = {
  postsPagination: PostPagination;
};
