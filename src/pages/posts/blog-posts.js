import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import PlaceholderSvg from '../placeholder-svg'

function BlogPosts(props) {
    //console.warn("data", props.data.data.nodeQuery.entities)
    return (
        <>
            <>
            <Head>
                <title>EDB | Blog</title>
            </Head>
            <div className="container text-center my-0">
              <span className="img-fluid opacity-1">
                  <PlaceholderSvg />
              </span>
              <h1 className="balance-text">The EDB Blog </h1>
              <p className="text-muted balance-text">
                  This text supports the headline above. Donec id elit non mi porta gravida at eget metus.<br data-owner="balance-text"/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed.
              </p>
            </div>
            {/* <div className="container my-5">
              <div className="row">
                <div className="col-md-9 col-sm-12 mx-auto">
                <h2 className="text-sm-left text-center mb-4">Recent Posts</h2>  
            {
                props.data.data.nodeQuery.entities.map(data => (
                    <div key={data.entityId} className="d-flex align-items-center border-top position-relative py-4 flex-column flex-sm-row text-center text-sm-left">
                        <div class="mr-sm-2 mr-0">
                            <img src={data.fieldBlogImage.entity.url.replace('files\/', 'files\/styles\/square_thumbnail\/public\/')} />
                        </div>
                        <div className="py-2">
                        <h3 className="m-0"> 
                            <Link as={''} href={`#`}>
                                <a className="text-dark stretched-link">{data.entityLabel}</a>
                            </Link>
                        </h3>
                <p className="mb-0">{data.fieldAuthor.entity.fieldFirstName} {data.fieldAuthor.entity.fieldLastName}</p>
                        <p className="mb-0 text-muted small">{data.body.value.replace(/(<([^>]+)>)/ig,"").replace('&nbsp;', ' ').substring(0, 300)}...</p>
                        <br />
                        </div>
                    </div>
                ))
            }
                </div>
            </div>
          </div> */}
          </>
        </>
    )
}


// BlogPosts.getInitialProps = async function () {
//     const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1OTA4NDI2NDAsImRydXBhbCI6eyJ1aWQiOiI0ODQyODEifX0.tnttgnORSjBvchgLVlMtOZpyldxI1ayVZQTTFNNqkT_2RP5dRZTWv9BjH1FsBBNTTZKr2F_qFI8rIY5n_jlsYnncqU_GsxRiypn6gBbKPf_zQ3MNXIc7Ua-Q85LxXZQN4OQQ2snEWuSSq-9oCW_GGljXgJ5zk96IWQ2Y13mWJHOYinRBt2hP263hDrgp1Uy7_inRkvcah22hNhXD9cmor2-Utr-ZQPd6gbduUsA7AhNwdh5aVWKVvmSq2h7FKv37fWm_GOIqku4sUDax8CjON6jXEs6kNefCzrjN_boMtw1VrRawxflrOCPncM2Ez62jNDshNfd0EB_Y8cCpQ-q9kg'
//     //const res = await fetch('https://jsonplaceholder.typicode.com/todos')
//     const url 'https://uxteam:neo2020@www-qa.enterprisedb.com/jsonapi/node/tutorials_?page[limit]=10&filter[status][value]=1'
//     //const url = 'http://headless.docksal/graphql?queryId=cda3764045b5ac88d748c5b1323590bf7ae23488:1'
//     const res = await fetch(url, {
//         method: 'get',
//         headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${token}`,
//         },
//     })
//     const data = await res.json();
//     return {
//         data
//     }
// }

export default BlogPosts