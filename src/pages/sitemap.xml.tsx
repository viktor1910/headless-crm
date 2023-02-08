import React from 'react';
import axiosWrapper from '~/services/axiosConfig';
import { CardDichVuModel } from '~/services/types';

const mainuri = 'https://kangheevietnam.com';

function generateSiteMap(danhMucDichVu: CardDichVuModel[], dichvu: CardDichVuModel[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>${mainuri}</loc>
     </url>
     <url>
       <loc>${mainuri}/dat-lich</loc>
     </url>
     <url>
       <loc>${mainuri}/dich-vu</loc>
     </url>
     <url>
     <loc>${mainuri}/khuyen-mai</loc>
   </url>
   <url>
   <loc>${mainuri}/lien-he</loc>
 </url>
     ${danhMucDichVu
       .map(({ slug }) => {
         return `
       <url>
           <loc>${mainuri}/dich-vu/${slug}</loc>
       </url>
     `;
       })
       .join('')}
       ${dichvu
         .map(({ slug }) => {
           return `
        <url>
            <loc>${mainuri}/bai-viet/${slug}</loc>
        </url>
      `;
         })
         .join('')}
   </urlset>
 `;
}

function SiteMap() {}
export async function getServerSideProps({ res }: any) {
  const { id: idDichVu } = await axiosWrapper
    .get<any>('/categories', {
      params: {
        slug: 'dich-vu',
      },
    })
    .then(res => res.data?.at(0));

  const dichvu =
    (await axiosWrapper
      .get<CardDichVuModel[]>('/posts', {
        params: {
          categories: idDichVu,
        },
      })
      .then(res => res.data)) || [];

  const danhMucDichVu = (await axiosWrapper.get<CardDichVuModel[]>('/danh-muc-dich-vu').then(res => res.data)) || [];

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(danhMucDichVu, dichvu);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
