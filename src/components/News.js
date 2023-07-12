import React, { Component } from 'react'
import Newsitem from './Newsitem';
import Loader from './Loader';
// impt
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 15,
    category: "sports"

  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string

  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // articles =  [
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "Austin American-Statesman"
  //         },
  //         "author": "Sara Diggins",
  //         "title": "See photos from Donald Trump's first 2024 campaign rally in Waco, Texas - Austin American-Statesman",
  //         "description": "Former President Donald Trump held his first 2023 presidential campaign rally in Waco, Texas, on Saturday.",
  //         "url": "https://www.statesman.com/picture-gallery/news/2023/03/25/former-president-donald-trump-2024-campaign-rally-waco-texas-photos/11538443002/",
  //         "urlToImage": "https://www.gannett-cdn.com/presto/2023/03/26/NAAS/d14454b2-4282-455f-b8c2-44405b350efd-Trump_Rally_in_Waco_SED_400.JPG?crop=2399%2C1350%2Cx0%2Cy0&width=1200",
  //         "publishedAt": "2023-03-26T14:23:00Z",
  //         "content": null
  //     },
  //     {
  //         "source": {
  //             "id": "cnn",
  //             "name": "CNN"
  //         },
  //         "author": "Nouran Salahieh, Haley Brink, Holly Yan, Allison Chinchar",
  //         "title": "An 'extremely dangerous tornado' strikes Georgia as 20 million Southerners are at risk of treacherous weather Sunday - CNN",
  //         "description": "After a rash of violent storms killed 26 people in the South over the weekend, a new \"large and extremely dangerous tornado\" struck Sunday south of La Grange, Georgia, the National Weather Service in Atlanta said.",
  //         "url": "https://www.cnn.com/2023/03/26/weather/us-severe-storms-sunday/index.html",
  //         "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230326010545-15-mississippi-tornado-032623.jpg?c=16x9&q=w_800,c_fill",
  //         "publishedAt": "2023-03-26T14:04:00Z",
  //         "content": "After a rash of violent storms killed 26 people in the South over the weekend, a new large and extremely dangerous tornado struck Sunday south of La Grange, Georgia, the National Weather Service in A… [+5313 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "SheKnows"
  //         },
  //         "author": "Delilah Gray",
  //         "title": "Harry Styles Proves He’s Officially Moved on From Olivia Wilde By Packing on the PDA With Pete Davidson’s Ex - Yahoo Life",
  //         "description": "It seems Harry Styles has officially moved on from his whirlwind romance with Olivia Wilde! While the “As It Was” singer has been open about his romances in ...",
  //         "url": "https://www.sheknows.com/entertainment/articles/2742218/harry-styles-emily-ratajkowski-pda-video/",
  //         "urlToImage": "https://s.yimg.com/ny/api/res/1.2/Rkyr4lyLAozDN90p275ibg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD05MDA-/https://media.zenfs.com/en/sheknows_79/b91f7d06ac733582f70869d37d62536a",
  //         "publishedAt": "2023-03-26T13:44:16Z",
  //         "content": "If you purchase an independently reviewed product or service through a link on our website, SheKnows may receive an affiliate commission. \r\nIt seems Harry Styles has officially moved on from his whir… [+1719 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "the-hill",
  //             "name": "The Hill"
  //         },
  //         "author": "Julia Mueller",
  //         "title": "Khanna won’t run for Senate, endorses Barbara Lee - The Hill",
  //         "description": "Rep. Ro Khanna (D-Calif.) on Sunday announced he won’t make a run for Senate next year and instead endorsed Rep. Barbara Lee’s (D-Calif.) campaign to replace retiring Sen. Dianne Feinstein (D-Calif.).  “I have concluded that despite a lot of enthusiasm from B…",
  //         "url": "https://thehill.com/homenews/campaign/3918698-khanna-wont-run-for-senate-endorses-barbara-lee/",
  //         "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2022/10/AP22251065896129.jpg?w=1280",
  //         "publishedAt": "2023-03-26T13:35:00Z",
  //         "content": "Skip to content\r\nRep. Ro Khanna (D-Calif.) on Sunday announced he won’t make a run for Senate next year and instead endorsed Rep. BarbaraLee’s (D-Calif.) campaign to replace retiring Sen. Dianne Fein… [+1097 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "NDTV News"
  //         },
  //         "author": null,
  //         "title": "Ski Accident, $1 Lawsuit, Taylor Swift: Gwyneth Paltrow's Trial In 10 Points - NDTV",
  //         "description": "Months after actors Amber Heard and Johnny Depps sensational trial had the world glued to their phones, another Hollywood actors soap opera-like trial is making headlines.",
  //         "url": "https://www.ndtv.com/world-news/gwyneth-paltrow-trial-ski-accident-1-lawsuit-taylor-swift-gwyneth-paltrows-trial-in-10-points-3894666",
  //         "urlToImage": "https://c.ndtvimg.com/2023-03/u3v25rko_gwyneth-paltrow-afp_625x300_26_March_23.jpg",
  //         "publishedAt": "2023-03-26T13:10:00Z",
  //         "content": "The case pertains to a 2016 ski accident where both parties claim to have caused the crash.\r\nMonths after actors Amber Heard and Johnny Depp's sensational trial had the world glued to their phones, a… [+3096 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "WABC-TV"
  //         },
  //         "author": null,
  //         "title": "'Creed III' Actor Jonathan Majors arraigned following arrest on assault charges in Manhattan - WABC-TV",
  //         "description": "Police say that Majors, 33, was involved in a domestic dispute with a 30-year-old woman. The woman told police she was assaulted and Majors was taken into custody.",
  //         "url": "https://abc7ny.com/jonathan-majors-nyc-arrest-creed-iii-actor/13019873/",
  //         "urlToImage": "https://cdn.abcotvs.com/dip/images/13015946_032523-jonathan-majors.jpg?w=1600",
  //         "publishedAt": "2023-03-26T13:07:30Z",
  //         "content": "CHELSEA, Manhattan (WABC) -- 'Creed III' actor Jonathan Majors was arraigned following his recent arrest on assault charges, according to police.\r\nOfficials say that Majors, 33, was involved in a dom… [+1275 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "BuzzFeed News"
  //         },
  //         "author": "Amanda Gardner",
  //         "title": "What Experts Say About Candida Auris, The New “Urgent Threat” To Human Health - BuzzFeed News",
  //         "description": "Candida auris is a type of yeast that can spread from person to person and is resistant to antifungal treatments. The CDC calls it an “urgent threat.”",
  //         "url": "https://www.buzzfeednews.com/article/amandagardner/new-fungus-candida-auris-climate-change",
  //         "urlToImage": "https://img.buzzfeed.com/buzzfeed-static/static/2023-03/25/23/campaign_images/b01ccdc8dbd7/this-new-fungus-is-a-problem-and-climate-change-m-3-3720-1679787413-0_dblbig.jpg",
  //         "publishedAt": "2023-03-26T12:46:02Z",
  //         "content": "What is Candida auris?\r\n First identified in Asia in 2009, C. auris is now found on four continents. In the US, it was initially only found in certain hospitals, nursing homes, and long-term healthca… [+3436 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "axios",
  //             "name": "Axios"
  //         },
  //         "author": "Ivana Saric",
  //         "title": "Biden nominee to lead FAA withdraws amid GOP opposition - Axios",
  //         "description": "Transportation Secretary Pete Buttigieg condemned the \"undeserved\" partisan attacks against Washington.",
  //         "url": "https://www.axios.com/2023/03/26/biden-nominee-faa-withdraw",
  //         "urlToImage": "https://images.axios.com/ttBfgfGxca56yL3igvumAXyQB0A=/0x90:7935x4553/1366x768/2023/03/26/1679833602623.jpg",
  //         "publishedAt": "2023-03-26T12:41:07Z",
  //         "content": "Denver International Airport CEO Phil Washington, President Biden's nominee to lead the Federal Aviation Administration (FAA), has withdrawn his nomination amid Republican opposition.\r\nDriving the ne… [+830 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "The Cut"
  //         },
  //         "author": "Claire Comstock-Gay",
  //         "title": "Weekly Horoscopes for the Week of March 27 by the Cut - The Cut",
  //         "description": "A list of all the horoscope signs (Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces) and their weekly horoscopes, by the Cut’s astrologer Madame Clairevoyant.",
  //         "url": "http://www.thecut.com/2023/03/weekly-horoscopes-for-the-week-of-march-27-by-the-cut.html",
  //         "urlToImage": "https://pyxis.nymag.com/v1/imgs/b88/bbf/7163622e8097cc74686836fe74bda7d5ba-Aries-season-kathy-acker.1x.rsocial.w1200.jpg",
  //         "publishedAt": "2023-03-26T12:30:55Z",
  //         "content": "Between the start of a new astrological year, the Aries new moon, and lots of planets moving into new signs, the last couple weeks have been full of motion and change. This week should feel a bit les… [+7531 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "Fox Business"
  //         },
  //         "author": "Anders Hagstrom",
  //         "title": "Elon Musk values Twitter at less than half of $44B price tag in offer to employees - Fox Business",
  //         "description": "Billionaire Twitter CEO Elon Musk offered his employees stock grants that valued the company at $20 billion last week, less than half the $44 billion he bough it for.",
  //         "url": "https://www.foxbusiness.com/politics/elon-musk-values-twitter-less-than-half-44b-price-tag-offer-employees",
  //         "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/10/0/0/MUSK.jpg?ve=1&tl=1",
  //         "publishedAt": "2023-03-26T12:22:23Z",
  //         "content": "Billionaire Twitter CEO Elon Musk valued his company at less than half the price he purchased it for in a stock option offer to employees last week.\r\nMusk gave stock grants to employees in an email e… [+2273 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "POLITICO.eu"
  //         },
  //         "author": "Bartosz Brzezinski",
  //         "title": "Kyiv and Berlin slam Putin's plan to station nuclear weapons in Belarus - POLITICO Europe",
  //         "description": "German Federal Foreign Office said Russia’s announcement on Saturday was akin to ‘nuclear intimidation.’",
  //         "url": "https://www.politico.eu/article/kyiv-and-berlin-slam-putins-plan-to-station-nuclear-weapons-in-belarus-ukraine-war/",
  //         "urlToImage": "https://www.politico.eu/cdn-cgi/image/width=1200,height=630,fit=crop,quality=80,onerror=redirect/wp-content/uploads/2023/03/26/GettyImages-1244580161-scaled.jpg",
  //         "publishedAt": "2023-03-26T12:05:00Z",
  //         "content": "Officials in Kyiv and Berlin condemned Russian President Vladimir Putin’s announcement that Moscow would station tactical nuclear weapons in neighboring Belarus.\r\nThe Kremlin “took Belarus as a nucle… [+1862 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "the-wall-street-journal",
  //             "name": "The Wall Street Journal"
  //         },
  //         "author": "Shane Shifflett, Danny Dougherty",
  //         "title": "Where Financial Risk Lies, in 12 Charts - WSJ - The Wall Street Journal",
  //         "description": "Data show worrisome trends in real estate, banks and private markets",
  //         "url": "https://www.wsj.com/articles/where-financial-risk-lies-in-12-charts-792bca35",
  //         "urlToImage": "https://images.wsj.net/im-751215/social",
  //         "publishedAt": "2023-03-26T12:00:00Z",
  //         "content": null
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "NDTV News"
  //         },
  //         "author": "Sarah Jacob",
  //         "title": "\"Nirav Modi And Lalit Modi Aren't...\": Shashi Tharoor Defends Rahul Gandhi - NDTV",
  //         "description": "Congress MP Shashi Tharoor today condemned the disqualification of Rahul Gandhi from the Lok Sabha after conviction in a criminal defamation case filed by a BJP leader in Gujarat. Mr Gandhi was convicted and sentenced to two years in jail in the defamation ca…",
  //         "url": "https://www.ndtv.com/video/exclusive/left-right-centre/nirav-modi-and-lalit-modi-aren-t-shashi-tharoor-defends-rahul-gandhi-690181",
  //         "urlToImage": "https://c.ndtvimg.com/2023-03/fg4h210g_shashi-tharoor_160x120_26_March_23.jpg",
  //         "publishedAt": "2023-03-26T11:52:14Z",
  //         "content": null
  //     },
  //     {
  //         "source": {
  //             "id": "usa-today",
  //             "name": "USA Today"
  //         },
  //         "author": "Dan Wolken",
  //         "title": "UConn heads to NCAA Tournament's Final Four as clear title favorite - USA TODAY",
  //         "description": "After years in the wilderness, UConn is back in the men's Final Four and has the look of a team that is going to bring home the national championship.",
  //         "url": "https://www.usatoday.com/story/sports/college/columnist/dan-wolken/2023/03/26/uconn-final-four-return-march-madness-ncaa-tournament/11545570002/",
  //         "urlToImage": "https://www.gannett-cdn.com/presto/2023/03/26/USAT/684fed05-bf8b-4a00-bd7b-16a62ba785b6-USATSI_20322186.jpg?crop=4545,2557,x0,y103&width=3200&height=1801&format=pjpg&auto=webp",
  //         "publishedAt": "2023-03-26T11:50:02Z",
  //         "content": "LAS VEGAS It was the middle of January in 2020 and another miserable winter was at hand for UConn, a program stuck in a conference it didnt want to be a part of and playing a brand of basketball that… [+5251 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "mlive.com"
  //         },
  //         "author": "Emily Bingham | ebingham@mlive.com",
  //         "title": "5 planets, moon to align in beautiful ‘planet parade’ this week - MLive.com",
  //         "description": "Grab your binoculars and get ready for a special night-sky treat.",
  //         "url": "https://www.mlive.com/news/2023/03/5-planets-moon-to-align-in-beautiful-planet-parade-this-week.html",
  //         "urlToImage": "https://www.mlive.com/resizer/t0ouiu-aeTw0SjIqWniForUsJ2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/CL3K6JHTFRBVLI5KPAMK4QRALQ.png",
  //         "publishedAt": "2023-03-26T11:18:00Z",
  //         "content": "A fun sky event is in store for stargazers this week: The chance to see five planets, the moon and a star cluster aligned in whats called a planet parade.\r\nThe parade will be visible all week, but wi… [+1538 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "politico",
  //             "name": "Politico"
  //         },
  //         "author": null,
  //         "title": "How Florida uses a little-known law to punish abortion clinics - POLITICO",
  //         "description": "The state is targeting abortion providers — but not for violating the 15-week ban.",
  //         "url": "https://www.politico.com/news/2023/03/26/florida-abortion-law-ban-00088815",
  //         "urlToImage": "https://static.politico.com/18/f9/34e0148b41b7b061820c13429888/https-delivery.gettyimages.com/downloads/1238535806",
  //         "publishedAt": "2023-03-26T11:00:00Z",
  //         "content": "Florida has become a hub for abortions since the fall of Roe v. Wade last year, despite a new law limiting abortions after 15 weeks. Thousands of people have come to Florida from across the southeast… [+5235 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "usa-today",
  //             "name": "USA Today"
  //         },
  //         "author": "Kim Hjelmgaard and Joey Garrison, USA TODAY",
  //         "title": "American contractor killed, troops wounded in Iran-linked drone attack in Syria, prompting US airstrikes - USA TODAY",
  //         "description": "The Pentagon responded to an attack on a base in Syria by launching airstrikes on groups affiliated with Iran's Islamic Revolutionary Guard Corps.",
  //         "url": "https://www.usatoday.com/story/news/world/2023/03/24/u-s-contractor-killed-troops-wounded-iran-linked-drone-syria/11534608002/",
  //         "urlToImage": "https://www.gannett-cdn.com/presto/2023/03/24/USAT/3c929ee1-2d81-463b-b5c5-2bd3c9d18eac-AP_APTOPIX_Syria.JPG?auto=webp&crop=5471,3078,x0,y278&format=pjpg&width=1200",
  //         "publishedAt": "2023-03-26T10:37:37Z",
  //         "content": "An American contractor was killed and five U.S. troops and a second U.S. contractor were wounded when a suspected Iranian-linked drone attacked a coalition military base in northeast Syria late Thurs… [+3017 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "The Times of Israel"
  //         },
  //         "author": null,
  //         "title": "Knesset to see decisive week for Supreme Court, as cracks appear in coalition - The Times of Israel",
  //         "description": "Core judicial overhaul plan to put coalition in control of appointing judges about to become law, amid mini-rebellion in Likud over pushing legislative pace despite societal rifts",
  //         "url": "https://www.timesofisrael.com/knesset-to-see-decisive-week-for-supreme-court-as-cracks-appear-in-coalition/",
  //         "urlToImage": "https://static.timesofisrael.com/www/uploads/2023/03/F230320EM116-1024x640.jpg",
  //         "publishedAt": "2023-03-26T10:22:16Z",
  //         "content": "With only days until the Knesset breaks for its April recess, the coalition is sprinting to close core elements of its judicial overhaul amid a mini-internal rebellion, in what is poised to be the mo… [+6939 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "New York Post"
  //         },
  //         "author": "Associated Press",
  //         "title": "Honduras establishes ties with China after breaking off relations with Taiwan - New York Post ",
  //         "description": "The Honduran Foreign Ministry said in a statement on Twitter that its government recognizes “only one China in the world” and that Beijing “is the only legitimate government that represents all of …",
  //         "url": "https://nypost.com/2023/03/26/honduras-establishes-ties-with-china-after-taiwan-break/",
  //         "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/03/China-and-Honduras.jpg?quality=75&strip=all&w=1024",
  //         "publishedAt": "2023-03-26T09:38:00Z",
  //         "content": "Honduras established diplomatic ties with China on Sunday after breaking off relations with Taiwan, which is increasingly isolated and now recognized by only 13 sovereign states, including Vatican Ci… [+5368 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "cnn",
  //             "name": "CNN"
  //         },
  //         "author": "Brian Fung",
  //         "title": "Asian Americans are anxious about hate crimes. TikTok ban rhetoric isn't helping - CNN",
  //         "description": "Ellen Min doesn't go to the grocery store anymore. She avoids bars and going out to eat with her friends; festivals and community events are out, too. This year, she opted not to take her kids to the local St. Patrick's Day parade.",
  //         "url": "https://www.cnn.com/2023/03/26/tech/asian-americans-tiktok/index.html",
  //         "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230324175557-tik-tok-ban-asian-hate.jpg?c=16x9&q=w_800,c_fill",
  //         "publishedAt": "2023-03-26T09:04:00Z",
  //         "content": "Ellen Min doesnt go to the grocery store anymore. She avoids bars and going out to eat with her friends; festivals and community events are out, too. This year, she opted not to take her kids to the … [+13271 chars]"
  //     }
  // ]      
  constructor(props) {
    super(props);
    console.log("Hey!myself constructor")

    this.state =
    {
      articles: [],
      loading: true,
      page: 1,
      totalResults : 0,
      

    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - TEJnews`
  }


  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    //  console.log("data : ",data);
    let parsedData = await data.json()
    //  console.log("parsedData :",parsedData )
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: true
    })
  }

  async nextNews() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true })
    let data = await fetch(url);
    this.props.setProgress(30)
    let parsedData = await data.json()
    this.props.setProgress(70)
    this.setState
      ({
        // page : this.state.page -1,
        totalResults: parsedData.totalResults,
        articles: parsedData.articles,
        // loading: false
      })
      this.props.setProgress(100)
  }

  previousClickFunc = async () => {
    // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7484b1584c5e42be802936949c01d94b&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading : true})
    // let data =await fetch(url);
    // let parsedData = await data.json()
    //  this.setState
    //  ({
    //     page : this.state.page -1,
    //     articles : parsedData.articles,
    //     loading : false
    // })  
    this.setState({ page: this.state.page - 1 })
    this.nextNews()

  }

  nextClickFunc = async () => {
    //  if(( this.state.page + 1 > Math.ceil(this.state.totalResults/15)))
    //  {
    //      console.log("nothing")
    //  }
    //  else
    //  {

    // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7484b1584c5e42be802936949c01d94b&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading :true})
    // let data =await fetch(url);
    // let parsedData = await data.json()
    //  this.setState
    //  ({
    //     page : this.state.page +1,
    //     articles : parsedData.articles,
    //     loading : false
    // }) 
    //  }
    this.setState({ page: this.state.page + 1 })
    this.nextNews()
  }

  fetchMoreData= async()=>
  {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({page : this.state.page + 1})
    // this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState
      ({
        // page : this.state.page -1,
        totalResults: parsedData.totalResults,
        articles:this.state.articles.concat(parsedData.articles),
        // loading: false
      })

  }

  render() {
    return (
      <>
        {/* {this.state.loading && <Loader />} */}
        <div className="container">
          <h2 style={{ fontFamily: "serif" }}> <strong>TEJ</strong>news - Top Headlines</h2>
          <h2 style={{ fontFamily: "serif" }}>Category - {this.capitalizeFirstLetter(this.props.category)}</h2>
          
            <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length !== this.state.totalResults}
              loader={<Loader/>} >

             <div className="container">   
            <div className="row">
            {this.state.articles.map((element) => {
              return <div className="col-md-4 " key={element.url}>
                <Newsitem title={element.title ? element.title : "not available"} description={element.description ? element.description.slice(0, 80) : "not available"} imageURL={element.urlToImage ? element.urlToImage : "https://images.unsplash.com/photo-1610513320995-1ad4bbf25e55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} newsURL={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name} />
                    </div>
            })}
            </div>
            </div>
        </InfiniteScroll>
          </div>
        
        {/* <div className="container d-flex justify-content-between my-4">
          <button className="btn btn-primary" disabled={this.state.page <= 1} onClick={this.previousClickFunc} type="submit">&larr; Previous</button>
          <button className="btn btn-primary" disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults / 15))} onClick={this.nextClickFunc} type="submit">  Next &rarr;</button>
        </div> */}
      </>
    )
  }
}

export default News;
