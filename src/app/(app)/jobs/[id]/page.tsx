import { getJob } from "@/sanity/sanity.query";
import JobsIdClientComponent from "@/src/components/JobsIdClientComponent";

const JobsIdPage = async ({ params }: { params: { id: string } }) => {
  const job = await getJob(params?.id);
  return <JobsIdClientComponent job={job} />;
};

export default JobsIdPage;
