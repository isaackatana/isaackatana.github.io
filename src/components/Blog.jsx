import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

function Blog() {
  return (
    <section className='blog'>
        <h1>Blog</h1>
        <div className='container'>
            <FontAwesomeIcon icon={faChevronRight} className='right'/>
            <FontAwesomeIcon icon={faChevronLeft} className='Left'/>
            <div className='s-post'>
                <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Technology_Trends.jpg" alt="" />
                <div>
                <h4>WiFi can be used to hack your phone</h4>
                <div>
                    <FontAwesomeIcon icon={faEllipsis} />
                </div>
                </div>
            </div>
            <div className='s-post'>
                <img src="https://i0.wp.com/kenyayote.com/wp-content/uploads/2018/01/Bonfire-Adventures-travel-agency-in-kenya.jpg?ssl=1" alt="" />
                <div>
                <h4>Places to visit when in africa for holidays </h4>
                <div>
                    <FontAwesomeIcon icon={faEllipsis} />
                </div>
                </div>
            </div>
            <div className='s-post'>
                <img src="https://scontent.fmba3-1.fna.fbcdn.net/v/t1.6435-9/141048140_3934529463225747_2736458377359001521_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGWr6SBfvYDGe4os9sQRkOvKshyiGDf7W4qyHKIYN_tblXOhhJE67MHKr-g7GuzMIl_Z2B_ioijDOnx0CVZCBdb&_nc_ohc=hhaKqm6_JAwAX9xtI9K&_nc_ht=scontent.fmba3-1.fna&oh=00_AfBAilTa-CtqWSQp3Fq7g9-XOfwQTRxM7BEtIqzRLOss5Q&oe=660FCF08" alt="" />
                <div>
                <h4>Where to rent kites and jetskis in Diani </h4>
                <div>
                    <FontAwesomeIcon icon={faEllipsis} />
                </div>
                </div>
            </div>
            <div className='s-post'>
                <img src="https://scontent.fmba3-1.fna.fbcdn.net/v/t1.6435-9/78877601_734365983729429_6852391489205436416_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHzvd6qE0CEPV34boaFJwbGNfuMPMM-4MQ1-4w8wz7gxFt7HWtQVbc7K_9QmOdywjpSPg6beAv7YrPd3nLv5fiL&_nc_ohc=PWtgfpx0HIIAX9RLoit&_nc_ht=scontent.fmba3-1.fna&oh=00_AfDlb2D2JcS0WC-3HUWll_3WiATxUD2bzYEE5B5bAsylfg&oe=660FE1AF" alt="" />
                <div>
                <h4>Dirt bikes and quads for rental in zanzibar  </h4>
                <div>
                    <FontAwesomeIcon icon={faEllipsis} />
                </div>
                </div>
            </div>
            <div className='s-post'>
                <img src="https://scontent.fmba3-1.fna.fbcdn.net/v/t1.6435-9/78877601_734365983729429_6852391489205436416_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHzvd6qE0CEPV34boaFJwbGNfuMPMM-4MQ1-4w8wz7gxFt7HWtQVbc7K_9QmOdywjpSPg6beAv7YrPd3nLv5fiL&_nc_ohc=PWtgfpx0HIIAX9RLoit&_nc_ht=scontent.fmba3-1.fna&oh=00_AfDlb2D2JcS0WC-3HUWll_3WiATxUD2bzYEE5B5bAsylfg&oe=660FE1AF" alt="" />
                <div>
                <h4>Dirt bikes and quads for rental in zanzibar  </h4>
                <div>
                    <FontAwesomeIcon icon={faEllipsis} />
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog