import Image from '../images/timetotravel.jpg'
import Image1 from '../images/img1.jpeg'
import Image2 from '../images/img3.jpeg'
import Image3 from '../images/images.jpeg'

const Home = () => {
return(

<div> 
<img src={Image} height={400} width={1700} style={{paddingTop:40, marginLeft:20, marginRight:40 }} />
<br/>
<div className="abc" style={{marginLeft:20, marginRight:20}}>
<p style={{paddingTop:20, textAlign: "left", fontSize: 50, marginLeft:20 }}>
This is  a travel page and We invite you to join us in our worldwide effort to produce the longed-for ashes of the red heifer!</p>

<p style={{paddingTop:20, textAlign: "left", fontSize: 20, marginLeft:20 }}>Things happen. Are they just coincidence, or "the finger of G-d" as Pharaoh's advisors opined? G-d, deeming mankind to be skeptical by nature, employed ten plagues, when only one would have sufficed, just to be certain that man gets the point.

Bo (Exodus 10:1 - 13:16)
Parashat Bo is read on Shabbat:
Shevat 6, 5783/January 28, 2023

Weekly Torah Study is now on Spotify & Deezer!</p>

</div>

<div style={{paddingTop:60}}>
<img src={Image1} height={250} width={500} style={{paddingTop:40, marginRight:90}} />

<img src={Image2} height={250} width={500} style={{paddingTop:40, marginleft:90}} />

<img src={Image3} height={250} width={500} style={{paddingTop:40,marginLeft:90}} />
</div>

</div>

)

}

export default Home