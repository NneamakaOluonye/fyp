import { useRouter } from "vue-router";
import useMetadata from "~/composables/useMetadata";

export default function setMetadata() {
  const router = useRouter();
  const title = router.currentRoute.value.meta.title;

  useMetadata({
    title: title + " || Apex",
    description: title
  });
}