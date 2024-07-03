"use client";

import Button from "@/components/Button";
import Input from "@/components/Input/Input";
import Page from "@/components/Page";
import { supabase } from "@/contexts/supabase.context";
import { nanoid } from "nanoid";
import { useState } from "react";

function CreateDealPage() {
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleClickCreate = async () => {
    if (!image) return;

    const extension = image.name.split(".").slice(-1);
    const filename = nanoid() + "." + extension;

    const response = await supabase.storage.from("deals").upload(`/${filename}`, image);
    if (!response.data) return;

    const imageUrl = "https://apsgphedhjwggzzznbqo.supabase.co/storage/v1/object/public/" + response.data.fullPath;
    await supabase.from("deals").insert({ content, imageUrl });
  };

  return (
    <Page title="판매글 작성하기">
      <Input label="판매글 내용" value={content} onChange={(e) => setContent(e.target.value)} />
      <Input label="대표 이미지" type="file" onChange={(e) => setImage(e.target.files?.[0] ?? null)} />
      <Button onClick={handleClickCreate}>판매글 작성하기</Button>
    </Page>
  );
}

export default CreateDealPage;
