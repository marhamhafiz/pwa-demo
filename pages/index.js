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
            "custom01": "w8DM9aSz7z ciaimmaUYM w1h7MbjPq4 TiXMd0qGDV 8SSq8Xr0xF rGR2tyZXrt NnvkiS3nhe mwexpg8Kqj J7ByVujGt3 pRv0pqwtGR v27w0Yr5DL JJL9dSizYV Jgf3tXak6J TCGbXFyV9L 46XAHJphkk wmi5qCkhcP u9eaWEAZSS yJAztcKRPx 0YALRNHx3y m0HX6rmaKf 3NruPx8MQC 5bw8AdA96J 76WRar6NGc 79pSR3VYcZ wfLLb72XCd gWpvm3UfH2 rucPn78yJV 21Fk7HvC6c ShB2y3Wx1P YjkKUuH9JK yeZdDr2GMS 9jTt0mDC7R 8u17jL4YY7 FCm23ixXLh N9jtDNpWJt RurQfeUn5F z0fk7ZPSuB T8EMrLgEfX 6uTHaqM3U3 QLgELB9VtG DnZKHTvAci V50UTFp4gt DKcwJFXG4C KnB0a1AhJQ YrjvUmv5b9 CPS68AYGcm AjJmnr3kJq 9euk9gejWn G7CiaJt9Pq YAuqxA1uS3 WVrY0Q8gRD ryqt333ik3 UmeCQnjKxU P4UmQCHbdk C4RfJLDcJ1 Kj422zjxm0 W9Bi9KD3Kw Bv05PM0in9 ddQ8wDWvnE fvtPuZbhB4 PvMvwaNRVM G4zzjkjiTD LiaV6tfde3 XqZxdGpehM JQvZveY9yi 2wFrA6h6gg aSaWEpJbwJ apwmKkrd30 ZdXz9pEyzm MeWGp6X9ta StL7N7vFrY FtgbH1fvgM JBqhRqqbvU 8kgNbA9vP5 zMNuyggZ97 K7v0ajPJh1 p578qa4aN4 STWQFemb9e 8bAXr1Fr59 VMG2QYhzcS bzE0meW3NZ YM2BUB9rvy NtDd9VNbNg RG94a7RU5m g0cm0RyNPp Jc3u0WrzZR JNX71hH0kk HDifdC06nK uNuSjufYiR qzURq8CZpu 7APzMBmgtF 04RGDf4huB VFLEYkkYFy kqyGubyN9G akS4bZzBPi 8aXG5u3bQN eS8SbSV1Y0 CgexEzErU6 Gt3aQaEMAB SHzJ259tY7 Y9dSL3p3RW ZuwLpVRz5z mtXhq5EbDm FDcB6APxuA 6mj2kLGMy2 xvjVDE9hMR 6gxyfLAJUM p2M0Fkzk1P 3QatDMuMLQ MDmVgwb6YY fDn7p5QXjm YC9H6r2Xz3 SNFCnDQtSp JJGLD4wdYL apK5Z4YAJB hvk7tJdCEe 2HEtHmPguA 1tKhp4gP8r 5wJwMHAirH QiuxG6iUyC uGm7Bp6386 t0U7gH27iX eL8tCSvAE1 UPHqx3hMQL z5FpggwEbf xArKwt8pTM GN43h9SQ4C xCN8ZHQFcZ FjHchdvmD0 0pSfHnDErn Rh5PuTNDST gU6HbYkhUU ajST3qLkmM k2zSwyRSXD 9iRd7wW3aU yYC1xFkFN0 81M3tXgWC2 e2fefJfiap NeRjgZKJdT vAYNFPuaeA bd1w6BYNmJ uLG35tC4jX YxrXmGKytp piKjzR6SzK QkVfj50PU9",
            "custom02": "w8DM9aSz7z ciaimmaUYM w1h7MbjPq4 TiXMd0qGDV 8SSq8Xr0xF rGR2tyZXrt NnvkiS3nhe mwexpg8Kqj J7ByVujGt3 pRv0pqwtGR v27w0Yr5DL JJL9dSizYV Jgf3tXak6J TCGbXFyV9L 46XAHJphkk wmi5qCkhcP u9eaWEAZSS yJAztcKRPx 0YALRNHx3y m0HX6rmaKf 3NruPx8MQC 5bw8AdA96J 76WRar6NGc 79pSR3VYcZ wfLLb72XCd gWpvm3UfH2 rucPn78yJV 21Fk7HvC6c ShB2y3Wx1P YjkKUuH9JK yeZdDr2GMS 9jTt0mDC7R 8u17jL4YY7 FCm23ixXLh N9jtDNpWJt RurQfeUn5F z0fk7ZPSuB T8EMrLgEfX 6uTHaqM3U3 QLgELB9VtG DnZKHTvAci V50UTFp4gt DKcwJFXG4C KnB0a1AhJQ YrjvUmv5b9 CPS68AYGcm AjJmnr3kJq 9euk9gejWn G7CiaJt9Pq YAuqxA1uS3 WVrY0Q8gRD ryqt333ik3 UmeCQnjKxU P4UmQCHbdk C4RfJLDcJ1 Kj422zjxm0 W9Bi9KD3Kw Bv05PM0in9 ddQ8wDWvnE fvtPuZbhB4 PvMvwaNRVM G4zzjkjiTD LiaV6tfde3 XqZxdGpehM JQvZveY9yi 2wFrA6h6gg aSaWEpJbwJ apwmKkrd30 ZdXz9pEyzm MeWGp6X9ta StL7N7vFrY FtgbH1fvgM JBqhRqqbvU 8kgNbA9vP5 zMNuyggZ97 K7v0ajPJh1 p578qa4aN4 STWQFemb9e 8bAXr1Fr59 VMG2QYhzcS bzE0meW3NZ YM2BUB9rvy NtDd9VNbNg RG94a7RU5m g0cm0RyNPp Jc3u0WrzZR JNX71hH0kk HDifdC06nK uNuSjufYiR qzURq8CZpu 7APzMBmgtF 04RGDf4huB VFLEYkkYFy kqyGubyN9G akS4bZzBPi 8aXG5u3bQN eS8SbSV1Y0 CgexEzErU6 Gt3aQaEMAB SHzJ259tY7 Y9dSL3p3RW ZuwLpVRz5z mtXhq5EbDm FDcB6APxuA 6mj2kLGMy2 xvjVDE9hMR 6gxyfLAJUM p2M0Fkzk1P 3QatDMuMLQ MDmVgwb6YY fDn7p5QXjm YC9H6r2Xz3 SNFCnDQtSp JJGLD4wdYL apK5Z4YAJB hvk7tJdCEe 2HEtHmPguA 1tKhp4gP8r 5wJwMHAirH QiuxG6iUyC uGm7Bp6386 t0U7gH27iX eL8tCSvAE1 UPHqx3hMQL z5FpggwEbf xArKwt8pTM GN43h9SQ4C xCN8ZHQFcZ FjHchdvmD0 0pSfHnDErn Rh5PuTNDST gU6HbYkhUU ajST3qLkmM k2zSwyRSXD 9iRd7wW3aU yYC1xFkFN0 81M3tXgWC2 e2fefJfiap NeRjgZKJdT vAYNFPuaeA bd1w6BYNmJ uLG35tC4jX YxrXmGKytp piKjzR6SzK QkVfj50PU9",
            "custom03": "w8DM9aSz7z ciaimmaUYM w1h7MbjPq4 TiXMd0qGDV 8SSq8Xr0xF rGR2tyZXrt NnvkiS3nhe mwexpg8Kqj J7ByVujGt3 pRv0pqwtGR v27w0Yr5DL JJL9dSizYV Jgf3tXak6J TCGbXFyV9L 46XAHJphkk wmi5qCkhcP u9eaWEAZSS yJAztcKRPx 0YALRNHx3y m0HX6rmaKf 3NruPx8MQC 5bw8AdA96J 76WRar6NGc 79pSR3VYcZ wfLLb72XCd gWpvm3UfH2 rucPn78yJV 21Fk7HvC6c ShB2y3Wx1P YjkKUuH9JK yeZdDr2GMS 9jTt0mDC7R 8u17jL4YY7 FCm23ixXLh N9jtDNpWJt RurQfeUn5F z0fk7ZPSuB T8EMrLgEfX 6uTHaqM3U3 QLgELB9VtG DnZKHTvAci V50UTFp4gt DKcwJFXG4C KnB0a1AhJQ YrjvUmv5b9 CPS68AYGcm AjJmnr3kJq 9euk9gejWn G7CiaJt9Pq YAuqxA1uS3 WVrY0Q8gRD ryqt333ik3 UmeCQnjKxU P4UmQCHbdk C4RfJLDcJ1 Kj422zjxm0 W9Bi9KD3Kw Bv05PM0in9 ddQ8wDWvnE fvtPuZbhB4 PvMvwaNRVM G4zzjkjiTD LiaV6tfde3 XqZxdGpehM JQvZveY9yi 2wFrA6h6gg aSaWEpJbwJ apwmKkrd30 ZdXz9pEyzm MeWGp6X9ta StL7N7vFrY FtgbH1fvgM JBqhRqqbvU 8kgNbA9vP5 zMNuyggZ97 K7v0ajPJh1 p578qa4aN4 STWQFemb9e 8bAXr1Fr59 VMG2QYhzcS bzE0meW3NZ YM2BUB9rvy NtDd9VNbNg RG94a7RU5m g0cm0RyNPp Jc3u0WrzZR JNX71hH0kk HDifdC06nK uNuSjufYiR qzURq8CZpu 7APzMBmgtF 04RGDf4huB VFLEYkkYFy kqyGubyN9G akS4bZzBPi 8aXG5u3bQN eS8SbSV1Y0 CgexEzErU6 Gt3aQaEMAB SHzJ259tY7 Y9dSL3p3RW ZuwLpVRz5z mtXhq5EbDm FDcB6APxuA 6mj2kLGMy2 xvjVDE9hMR 6gxyfLAJUM p2M0Fkzk1P 3QatDMuMLQ MDmVgwb6YY fDn7p5QXjm YC9H6r2Xz3 SNFCnDQtSp JJGLD4wdYL apK5Z4YAJB hvk7tJdCEe 2HEtHmPguA 1tKhp4gP8r 5wJwMHAirH QiuxG6iUyC uGm7Bp6386 t0U7gH27iX eL8tCSvAE1 UPHqx3hMQL z5FpggwEbf xArKwt8pTM GN43h9SQ4C xCN8ZHQFcZ FjHchdvmD0 0pSfHnDErn Rh5PuTNDST gU6HbYkhUU ajST3qLkmM k2zSwyRSXD 9iRd7wW3aU yYC1xFkFN0 81M3tXgWC2 e2fefJfiap NeRjgZKJdT vAYNFPuaeA bd1w6BYNmJ uLG35tC4jX YxrXmGKytp piKjzR6SzK QkVfj50PU9",
            "custom04": "w8DM9aSz7z ciaimmaUYM w1h7MbjPq4 TiXMd0qGDV 8SSq8Xr0xF rGR2tyZXrt NnvkiS3nhe mwexpg8Kqj J7ByVujGt3 pRv0pqwtGR v27w0Yr5DL JJL9dSizYV Jgf3tXak6J TCGbXFyV9L 46XAHJphkk wmi5qCkhcP u9eaWEAZSS yJAztcKRPx 0YALRNHx3y m0HX6rmaKf 3NruPx8MQC 5bw8AdA96J 76WRar6NGc 79pSR3VYcZ wfLLb72XCd gWpvm3UfH2 rucPn78yJV 21Fk7HvC6c ShB2y3Wx1P YjkKUuH9JK yeZdDr2GMS 9jTt0mDC7R 8u17jL4YY7 FCm23ixXLh N9jtDNpWJt RurQfeUn5F z0fk7ZPSuB T8EMrLgEfX 6uTHaqM3U3 QLgELB9VtG DnZKHTvAci V50UTFp4gt DKcwJFXG4C KnB0a1AhJQ YrjvUmv5b9 CPS68AYGcm AjJmnr3kJq 9euk9gejWn G7CiaJt9Pq YAuqxA1uS3 WVrY0Q8gRD ryqt333ik3 UmeCQnjKxU P4UmQCHbdk C4RfJLDcJ1 Kj422zjxm0 W9Bi9KD3Kw Bv05PM0in9 ddQ8wDWvnE fvtPuZbhB4 PvMvwaNRVM G4zzjkjiTD LiaV6tfde3 XqZxdGpehM JQvZveY9yi 2wFrA6h6gg aSaWEpJbwJ apwmKkrd30 ZdXz9pEyzm MeWGp6X9ta StL7N7vFrY FtgbH1fvgM JBqhRqqbvU 8kgNbA9vP5 zMNuyggZ97 K7v0ajPJh1 p578qa4aN4 STWQFemb9e 8bAXr1Fr59 VMG2QYhzcS bzE0meW3NZ YM2BUB9rvy NtDd9VNbNg RG94a7RU5m g0cm0RyNPp Jc3u0WrzZR JNX71hH0kk HDifdC06nK uNuSjufYiR qzURq8CZpu 7APzMBmgtF 04RGDf4huB VFLEYkkYFy kqyGubyN9G akS4bZzBPi 8aXG5u3bQN eS8SbSV1Y0 CgexEzErU6 Gt3aQaEMAB SHzJ259tY7 Y9dSL3p3RW ZuwLpVRz5z mtXhq5EbDm FDcB6APxuA 6mj2kLGMy2 xvjVDE9hMR 6gxyfLAJUM p2M0Fkzk1P 3QatDMuMLQ MDmVgwb6YY fDn7p5QXjm YC9H6r2Xz3 SNFCnDQtSp JJGLD4wdYL apK5Z4YAJB hvk7tJdCEe 2HEtHmPguA 1tKhp4gP8r 5wJwMHAirH QiuxG6iUyC uGm7Bp6386 t0U7gH27iX eL8tCSvAE1 UPHqx3hMQL z5FpggwEbf xArKwt8pTM GN43h9SQ4C xCN8ZHQFcZ FjHchdvmD0 0pSfHnDErn Rh5PuTNDST gU6HbYkhUU ajST3qLkmM k2zSwyRSXD 9iRd7wW3aU yYC1xFkFN0 81M3tXgWC2 e2fefJfiap NeRjgZKJdT vAYNFPuaeA bd1w6BYNmJ uLG35tC4jX YxrXmGKytp piKjzR6SzK QkVfj50PU9",
            "custom05": "w8DM9aSz7z ciaimmaUYM w1h7MbjPq4 TiXMd0qGDV 8SSq8Xr0xF rGR2tyZXrt NnvkiS3nhe mwexpg8Kqj J7ByVujGt3 pRv0pqwtGR v27w0Yr5DL JJL9dSizYV Jgf3tXak6J TCGbXFyV9L 46XAHJphkk wmi5qCkhcP u9eaWEAZSS yJAztcKRPx 0YALRNHx3y m0HX6rmaKf 3NruPx8MQC 5bw8AdA96J 76WRar6NGc 79pSR3VYcZ wfLLb72XCd gWpvm3UfH2 rucPn78yJV 21Fk7HvC6c ShB2y3Wx1P YjkKUuH9JK yeZdDr2GMS 9jTt0mDC7R 8u17jL4YY7 FCm23ixXLh N9jtDNpWJt RurQfeUn5F z0fk7ZPSuB T8EMrLgEfX 6uTHaqM3U3 QLgELB9VtG DnZKHTvAci V50UTFp4gt DKcwJFXG4C KnB0a1AhJQ YrjvUmv5b9 CPS68AYGcm AjJmnr3kJq 9euk9gejWn G7CiaJt9Pq YAuqxA1uS3 WVrY0Q8gRD ryqt333ik3 UmeCQnjKxU P4UmQCHbdk C4RfJLDcJ1 Kj422zjxm0 W9Bi9KD3Kw Bv05PM0in9 ddQ8wDWvnE fvtPuZbhB4 PvMvwaNRVM G4zzjkjiTD LiaV6tfde3 XqZxdGpehM JQvZveY9yi 2wFrA6h6gg aSaWEpJbwJ apwmKkrd30 ZdXz9pEyzm MeWGp6X9ta StL7N7vFrY FtgbH1fvgM JBqhRqqbvU 8kgNbA9vP5 zMNuyggZ97 K7v0ajPJh1 p578qa4aN4 STWQFemb9e 8bAXr1Fr59 VMG2QYhzcS bzE0meW3NZ YM2BUB9rvy NtDd9VNbNg RG94a7RU5m g0cm0RyNPp Jc3u0WrzZR JNX71hH0kk HDifdC06nK uNuSjufYiR qzURq8CZpu 7APzMBmgtF 04RGDf4huB VFLEYkkYFy kqyGubyN9G akS4bZzBPi 8aXG5u3bQN eS8SbSV1Y0 CgexEzErU6 Gt3aQaEMAB SHzJ259tY7 Y9dSL3p3RW ZuwLpVRz5z mtXhq5EbDm FDcB6APxuA 6mj2kLGMy2 xvjVDE9hMR 6gxyfLAJUM p2M0Fkzk1P 3QatDMuMLQ MDmVgwb6YY fDn7p5QXjm YC9H6r2Xz3 SNFCnDQtSp JJGLD4wdYL apK5Z4YAJB hvk7tJdCEe 2HEtHmPguA 1tKhp4gP8r 5wJwMHAirH QiuxG6iUyC uGm7Bp6386 t0U7gH27iX eL8tCSvAE1 UPHqx3hMQL z5FpggwEbf xArKwt8pTM GN43h9SQ4C xCN8ZHQFcZ FjHchdvmD0 0pSfHnDErn Rh5PuTNDST gU6HbYkhUU ajST3qLkmM k2zSwyRSXD 9iRd7wW3aU yYC1xFkFN0 81M3tXgWC2 e2fefJfiap NeRjgZKJdT vAYNFPuaeA bd1w6BYNmJ uLG35tC4jX YxrXmGKytp piKjzR6SzK QkVfj50PU9"
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
