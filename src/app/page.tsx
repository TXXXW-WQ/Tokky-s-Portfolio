'use client'

import Image from "next/image";
import React, { useEffect } from "react";
import useEmblaCarousel from 'embla-carousel-react'


export default function Home() {
  // スライダー設定
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center', containScroll: false })

  // 1. ボタンをクリックした時の関数を定義
  const scrollPrev = () => emblaApi && emblaApi.scrollPrev()
  const scrollNext = () => emblaApi && emblaApi.scrollNext()

  useEffect(() => {
    if (!emblaApi) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        emblaApi.scrollNext();
      }
      if (event.key === 'ArrowLeft') {
        emblaApi.scrollPrev();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [emblaApi]);

  return (
    <div>

      {/* ヘッダー */}
      <div className="sticcy top-0 flex bg-white">
        <h1 className="flex1 right-1 text-[2rem]  bg-black">Tokky's Portfolio</h1>
      </div>

      <main className="mt-6 mx-8 bg-amber-200  text-black space-y-4">

        {/* タイトル要素 */}
        <div className="flex flex-col items-center bg-sky-200 font-bold">
          <h1 className="text-[2rem]">Tokky Lab</h1>
          <p>Lerning & Works</p>
          <div>
            <Image
              src="/file.svg"
              alt="外部画像"
              width={300}
              height={200}
            />
          </div>
        </div>

        <div className="w-full bg-sky-200 py-10">
          <h1 className="px-6 mb-4 text-xl font-bold text-[2rem]">Projects</h1>

          {/* ビューポート（Emblaの基本構造） */}
          <div className="overflow-hidden touch-pan-y cursor-grab select-none relative" ref={emblaRef}>
            {/* コンテナ */}
            <div className="flex">

              {/* ONSEN GOODS [cite: 6] */}
              <div className="flex-none basis-[80%] md:basis-[600px] min-w-[80%] md:min-w-[600px] px-3">
                <div className="bg-gray-100 rounded-3xl aspect-video flex flex-col items-center justify-center border-2 border-gray-200 hover:border-blue-500 transition-colors">
                  <span className="text-gray-400">ONSEN GOODSの実機イメージ [cite: 6]</span>
                </div>
                <p className="mt-4 font-bold text-lg text-center">ONSEN GOODSの開発 [cite: 6]</p>
              </div>

              {/* LINE会計システム [cite: 7] */}
              <div className="flex-none basis-[80%] md:basis-[600px] min-w-[80%] md:min-w-[600px] px-3">
                <div className="bg-gray-100 rounded-3xl aspect-video flex flex-col items-center justify-center border-2 border-gray-200 hover:border-blue-500 transition-colors">
                  <span className="text-gray-400">LINE会計システムのイメージ [cite: 7]</span>
                </div>
                <p className="mt-4 font-bold text-lg text-center">LINE会計システムの開発 [cite: 7]</p>
              </div>

              {/* サマーインターン [cite: 8] */}
              <div className="flex-none basis-[80%] md:basis-[600px] min-w-[80%] md:min-w-[600px] px-3">
                <div className="bg-gray-100 rounded-3xl aspect-video flex flex-col items-center justify-center border-2 border-gray-200 hover:border-blue-500 transition-colors">
                  <span className="text-gray-400">インターン活動のイメージ [cite: 8]</span>
                </div>
                <p className="mt-4 font-bold text-lg text-center">サマーインターンでの活動 [cite: 8]</p>
              </div>
            </div>

            {/* ナビゲーションボタン*/}
            <button
              onClick={scrollPrev}
              className="absolute left-[calc(50%-300px)] top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </button>

            <button
              onClick={scrollNext}
              className="absolute right-[calc(50%-300px)] top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </button>

          </div>

        </div>

        {/* GitHub */}
        <div className="w-full bg-sky-200 py-10">
          <h1 className="px-6 mb-4 text-xl font-bold text-[2rem]">GitHub</h1>
        </div>
      </main>
    </div>
  );
}

