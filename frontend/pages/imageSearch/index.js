import ProductCard from "@/components/ProductCard/product-card";
import { db, storage, firebase } from "@/config/firebase";
import { useAuth } from "@/firebase/context";
import Layout from "components/Layout";
import Head from "next/head";
import { useState } from "react";
import styles from "./imageSearch.module.scss";

export default function ImageSearch() {
  const { user, loading } = useAuth();
  const [linkVal, setLinkVal] = useState("")
  const [reddata, setData] = useState()
  console.log(user, loading);

  const fetchRecommendations = async (e) => {
    e.preventDefault()
    const data = await fetch(`http://localhost:5000/image_search?url=${linkVal}`).then(res => res.json(),{
      headers:{
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': POST, PUT, PATCH, GET, DELETE, OPTIONS,
        'Access-Control-Allow-Headers': '*'
      }
    })
    console.log("recommend data ", data)
   
    const recommendIdStrings = []
    data.result.forEach(r => {
      recommendIdStrings.push(r.toString())
    })
   
    console.log("string ids, ",recommendIdStrings)
    await db  
    .collection("Products")
    .where(firebase.firestore.FieldPath.documentId(), "in", recommendIdStrings)
    .get()    
    .then(function (querySnapshot) {
      const products = querySnapshot.docs.map(function (doc) {
        return { id: doc.id, ...doc.data() };
      });
      setData(products);
    })
    .catch((e) => (error = e));

    // setData(data)
  }

  return (<Layout>
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Enter image link to search
          </h1>
        </div>
        <div>
          <div className={styles.uploadForm} >
            {/* <form className={styles.form} >
              <progress id="uploader" value="0" max="100">{uploaderVal}%</progress>
		<input onChange={uploadToFirebase} type="file" id="fileButton" />
              </form> */}

            <input onChange={e => setLinkVal(e.target.value)} value={linkVal} type="text" id="imageUrl" />
            <button onClick={fetchRecommendations} > Search</button>
          </div>
        </div>
        <div className={styles.products}>
            {!loading && reddata &&
              reddata.map((product) => {
                return (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    brand={product.sellers}
                    name={product.productDisplayName}
                    image={product.link}
                    price={product.price + 142}
                    sale_price={product.price}
                    favorite={user?.favorites?.includes(product.id)}
                  />
                );
              })}
          </div>
      </main>
    </div>
  </Layout>
  )
}