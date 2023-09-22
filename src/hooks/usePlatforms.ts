import platforms from "../data/platforms";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });

export default usePlatforms;
