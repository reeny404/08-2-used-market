## nextJs > Image tag
- next의 IMAGE 태그는 상위 요소 중 position이 static 하지 않은 요소 기준으로 그린다.
```
<div className="relative aspect-square">
    <Image src={imgURL} alt={title} fill className="object-contain" />
</div>
```
- css >> aspect-ratio : OOO
- css >> object-fit : OOO 
  - object-cover : 비율 유지한채로 넣기
  - object-conatin : 비율 유지
- **unoptimized** : 리사이징을 안하고 싶을 때
```
<div className="relative aspect-square">
    <Image src={deal.imgURL} alt={deal.title} fill unoptimized className="object-cover" />
</div>
```

## useRouter : router.push로 페이지 이동시 단점
- seo 불가 (다른 페이지 탐색을 하지 않는다.)

## seo 점수 높히는 방법
- 내부 링크 (내 사이트에서 내 사이트로 이동하는 것)
- 외부 링크 (타 사이트에서 내 사이트로 이동하는 것) : 이게 더 점수가 높을 것으로 예상

## typescript generic
```
export type SDeal<IsDetail extends boolean = false> = {
  id: number;
  title: string;
  imgURL: string;
  price: number;
  likesCount: number;
  location: string;
} & **(**IsDetail extends true
  ? {
    seller: {
      avatarImgURL: string;
      email: string;
    }

    createdAt: number;
    content: string;
    viewsCount: number;
  }
  : {}**)**;
```

## "use client"; 언제 사용하나요?
1. hook 사용할 때
2. window, document 등 브라우저 지원하는 API 사용할 때
3. interactive (onClick, onChange 핸들러 연결해야 함)