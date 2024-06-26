import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    window.addEventListener("message", function (event) {
      // We are receiveing messages from any origin, you can check of the origin by
      // using event.origin
    
      // get the port then use it for communication.
      var port = event.ports[0];
      if (typeof port === 'undefined') return;

      // const landingMessage = {
      //   "event":"view_item",
      //   "value":{
      //     "event_category":"ecommerce",
      //     "ecommerce":{
      //       "items":[{
      //         "item_id":1447,
      //         "item_name":"Pkn-nila",
      //         "affiliation":"TestMitraOps",
      //         "index":0,
      //         "item_brand":"Whiskas",
      //         "item_category":"Pakan",
      //         "item_list_id":"recommendation_product",
      //         "item_list_name":"PakanTerlaris",
      //         "item_variant":"1Sak 1Kg",
      //         "price":102000,
      //         "quantity":1
      //       }],
      //       "currency":"IDR",
      //       "value":102000
      //     }
      //   }
      // }

      const landingMessage = {
        "event":"view_item",
        "value":{
          "event_category":"ecommerce",
          "ecommerce":{
            "items":[{
              "item_id":1447,
              "item_name":"Pkn-nila",
              "affiliation":"TestMitraOps",
              "index":0,
              "item_brand":"Whiskas",
              "item_category":"Pakan",
              "item_list_id":"recommendation_product",
              "item_list_name":"PakanTerlaris",
              "item_variant":"1Sak 1Kg",
              "price":102000,
              "quantity":1
            }],
            "currency":"IDR",
            "value":102000,
            "custom01": "ZYJjX74UTP PnvVhApTyL gBWua3vp0b uYtD5ZTBRn Q7j621Y6Bh ZEkGWDawQw FmjCm5Ky6G BhPxSmnW6M 5Bu0yBhSWN",
            "custom02": "ZYJjX74UTP PnvVhApTyL gBWua3vp0b uYtD5ZTBRn Q7j621Y6Bh ZEkGWDawQw FmjCm5Ky6G BhPxSmnW6M 5Bu0yBhSWN",
            "custom03": "ZYJjX74UTP PnvVhApTyL gBWua3vp0b uYtD5ZTBRn Q7j621Y6Bh ZEkGWDawQw FmjCm5Ky6G BhPxSmnW6M 5Bu0yBhSWN",
            "custom04": "ZYJjX74UTP PnvVhApTyL gBWua3vp0b uYtD5ZTBRn Q7j621Y6Bh ZEkGWDawQw FmjCm5Ky6G BhPxSmnW6M 5Bu0yBhSWN",
            "custom05": "ZYJjX74UTP PnvVhApTyL gBWua3vp0b uYtD5ZTBRn Q7j621Y6Bh ZEkGWDawQw FmjCm5Ky6G BhPxSmnW6M 5Bu0yBhSWN"
          }
        }
      }
    
      // Post message on this port.
      port.postMessage(JSON.stringify(landingMessage))
    
      // Receive upcoming messages on this port.
      port.onmessage = function(event) {
        console.log("[PostMessage1] Got message " + event.data);
      };
    });
  },[])

  return (
    <div className={styles.container}>
      <Head>
        <title>PWA Demo</title>
        <meta name="description" content="Next PWA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Next <a href="https://nextjs.org">PWA Demo</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
