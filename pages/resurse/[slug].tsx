import client from "@/client";
import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { GetStaticPaths, GetStaticProps } from "next";
import Wrapper from "@/components/layout/Wrapper";
import Section from "@/components/layout/Section";
import richTextOptions from "@/lib/richTextOptions";
import processResources from "@/lib/processResources";
import Image from "next/image";
import AButton from "@/components/AButton";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import DynamicHead from "@/components/DynamicHead";

export default function Project({ resourceData, otherResources }: any) {
  const { resources } = processResources(resourceData);
  const resource = resources[0];
  const recommendedResources = processResources(
    otherResources
  ).resources.filter(
    (e: ResourceCard, i: number) =>
      e.id != resource.id && (resource.content.content.length > i + 2 || i < 1)
  );

  return (
    <>
      <DynamicHead
        title={resource.title}
        description={resource.resourceName}
        image={resource.image}
      />
      <Section bg="light">
        <Wrapper>
          <div className="w-full mt-[6rem] flex justify-between items-center flex-wrap">
            <div className="w-full md:w-[48%] flex flex-col items-start">
              <h1 className="text-3xl lg:text-4xl mb-3">{resource.title}</h1>
              <p className="mb-3">{resource.year}</p>

              {resource.file != undefined && (
                <AButton
                  text={`${resource.resourceName}`}
                  link={`https:${resource.file}`}
                  type="dark"
                  icon={<AiOutlineCloudDownload />}
                />
              )}
              {resource.resource != undefined ? (
                <AButton
                  text={`${resource.resourceName}`}
                  link={`${resource.resource}`}
                  type="dark"
                  icon={<FiExternalLink />}
                />
              ) : (
                <></>
              )}
            </div>
            <div className="w-full md:w-[48%] my-5">
              <Image
                src={resource.image}
                width={400}
                height={400}
                alt=""
                className="drop-shadow-xl rounded-md w-full h-auto"
              />
            </div>
          </div>
        </Wrapper>
      </Section>
      <Section wave="top">
        <Wrapper>
          <div className="flex items-start justify-between mt-[-3rem] flex-wrap">
            <div className="w-full md:w-[70%]">
              {documentToReactComponents(resource.content, richTextOptions)}
            </div>
            <div className="w-full md:w-[25%] flex flex-col ">
              <h2 className="text-2xl mb-3">Alte resurse:</h2>
              {recommendedResources.map((e: ResourceCard) => (
                <div
                  key={e.id}
                  className="w-full bg-[#fff] p-5 mb-8 drop-shadow-md rounded-md hover:drop-shadow-xl transition-all hover:translate-y-[-1rem]"
                >
                  <Link href={`/resurse/${e.slug}`}>
                    <Image
                      src={e.image}
                      width={400}
                      height={400}
                      alt=""
                      className=" rounded-md mb-3 w-full h-auto"
                    />
                    <div>{e.title}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Wrapper>
      </Section>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "resources",
    select: "fields.slug",
  });

  const paths = res.items.map((items: any) => ({
    params: { slug: items.fields.slug },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const resourceData = await client.getEntries({
    content_type: "resources",
    "fields.slug": params?.slug,
  });

  const otherResources = await client.getEntries({
    content_type: "resources",
    limit: 4,
  });

  return {
    props: { resourceData, otherResources },
    revalidate: 1000 * 60 * 60 * 4,
  };
};
