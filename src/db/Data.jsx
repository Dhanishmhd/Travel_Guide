const data = [
    {
        img:"https://imgs.search.brave.com/EYyp7hh2lMGZkhZJaNtyZwSA5KsggLh0__7vFZB0UGc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5hdWRsZXl0cmF2/ZWwuY29tLy0vbWVk/aWEvaW1hZ2VzL2hv/bWUvaW5kaWFuLXN1/YmNvbnRpbmVudC9p/bmRpYS9jb3VudHJ5/LWd1aWRlcy9rZXJh/bGEtZm9yLXRoZS1m/aXJzdC10aW1lLXZp/c2l0b3IvaXN0b2Nr/XzAwMDA2MjExMDI0/MF9tdW5uYXJfdGVh/X3BsYW5hdGlvbi5q/cGc_cT03OSZ3PTE5/MjAmaD02NDA",
        title:"munnar",
        description:"Munnar is a town and hill station located in the Idukki district of the southwestern Indian state of Kerala. Munnar is situated at around 1,600 metres (5,200 ft) above mean sea level, in the Western Ghats mountain range . Munnar is also called the Kashmir of South India and is a popular honeymoon destination.",
        rating:"4",
        district:"idukki",
        touristAttraction:"Hill Station",
        month:["May","June","October", "November","March"],
        activity:["zip line", "Trekking", "Off roading"],
        phone:"911-911-911",
        mail:"info@tourism.com",
        location:"https://www.google.com/maps/place/Munnar,+Kerala+685612/@10.0806489,77.0435354,14z/data=!3m1!4b1!4m6!3m5!1s0x3b0799794d099a6d:0x63250e5553c7e0c!8m2!3d10.0889333!4d77.0595248!16zL20vMDFydmpi?entry=ttu"
    },
    {
        img:"https://imgs.search.brave.com/A1ABO7NUdr7CqCQNtuwyAwF0GZTiabB8LPuNoT5CDaI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/a2VyYWxhdG91cmlz/bS5vcmcvaW1hZ2Vz/L2Rlc3RpbmF0aW9u/L2xhcmdlL3Zhcmth/bGFfYmVhY2gyMDEz/MTAzMTEyMjQwN18z/MjhfMS5qcGc",
        title:"varkala",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, repellendus veritatis. Debitis magnam perferendis, officiis dolorem corporis error itaque aliquam.",
        rating:"4",
        district:"kollam",
        touristAttraction:"Beaches and Lakes",
        month:"May",
        // activity:null
    },
    {
        img:"https://imgs.search.brave.com/CStTcajCdxE90xwOjQPBnd20fwPuVa-1EwCCO9jiPFk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9oYmxp/bWcubW10Y2RuLmNv/bS9jb250ZW50L2h1/YmJsZS9pbWcva292/YWxhbS9tbXQvZGVz/dGluYXRpb24vbV9L/b3ZhbGFtX2FjdGl2/aXR5X2JlYWNoX2xf/MzgzXzYxNC5qcGc",
        title:"kovalam",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, repellendus veritatis. Debitis magnam perferendis, officiis dolorem corporis error itaque aliquam.",
        rating:"5",
        district:"thiruvananthapuram",
        touristAttraction:"Beaches and Lakes",
        month:"May"
    },
    {
        img:"https://imgs.search.brave.com/jmOsgANRLCOGTIMXH7Wz9Iu2Meeq4e4eBWujyU8rOf8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9k/L2Q2L0dhdmksX0tl/cmFsYS5qcGc",
        title:"gavi",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, repellendus veritatis. Debitis magnam perferendis, officiis dolorem corporis error itaque aliquam.",
        rating:"2",
        district:"pathanamthitta",
        touristAttraction:"Hill Station",
        month:"May",
        activity:["Camping", "Wildlife Safari"]
    },
    {
        img:"https://imgs.search.brave.com/Ec_R0-gO8Xf85NZ9dkYnTm0CWp6kdQ4Fc0qDYIzVp-4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kYXRh/LmFnYXRldHJhdmVs/LmNvbS9pbWFnZXMv/cGhvdG9nYWxsZXJ5/LzIwMjEvamV3LXRv/d24ta29jaGkuanBn",
        title:"fort Kochi",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, repellendus veritatis. Debitis magnam perferendis, officiis dolorem corporis error itaque aliquam.",
        rating:"1",
        district:"ernakulam",
        touristAttraction:"Historic Sites",
        month:"May"
    },
    {
        img:"https://imgs.search.brave.com/emS1WEjCDGQN36O5VAQBuxwJC7dMJlH6ivZ_0BMG5KA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudG9paW1nLmNv/bS9waG90by8xMDAw/NTMwMjgvTGlvbi10/YWlsZWQtbWFjYXF1/ZS1pbi1TaWxlbnQt/VmFsbGV5LU5hdGlv/bmFsLVBhcmsuanBn/P3dpZHRoPTc0OCZy/ZXNpemU9NA",
        title:"Silent Valley",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, repellendus veritatis. Debitis magnam perferendis, officiis dolorem corporis error itaque aliquam.",
        rating:"5",
        district:"palakkad",
        touristAttraction:"Wildlife Sanctuaries",
        month:"May"
    },
    {
        img:"https://imgs.search.brave.com/Cfa9186s5zV9FOUo5lqwPx83Dqa31FuncOvB_Ov8n1Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85LzliL0t1/ZGFtYXRvbV9hdF90/aHJpc3N1cl9wb29y/YW1fMjAxM183NjE4/LkpQRy81MTJweC1L/dWRhbWF0b21fYXRf/dGhyaXNzdXJfcG9v/cmFtXzIwMTNfNzYx/OC5KUEc",
        title:"Vadakkunnathan (Shiva) Temple",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, repellendus veritatis. Debitis magnam perferendis, officiis dolorem corporis error itaque aliquam.",
        rating:"1",
        district:"thrissur",
        touristAttraction:"Religious Monuments",
        month:"May"
    },
    {
        img: "https://imgs.search.brave.com/vH5nd87NBVrWYIQImRYm0prgQ2YpQ1cYfCxUGbvroIA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dHJhbnNpbmRpYXRy/YXZlbHMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy9wYWRtYW5h/YmhhLXN3YW15LXRl/bXBsZS10cml2YW5k/cnVtLmpwZw",
        title: "Padmanabhaswamy Temple",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, repellendus veritatis. Debitis magnam perferendis, officiis dolorem corporis error itaque aliquam.",
        rating: "4",
        district: "thiruvananthapuram",
        touristAttraction: "Religious Monuments",
        month: "May"
    },
    {
        img: "https://imgs.search.brave.com/xEjbqk5kDgg2CMUVPc8654oVrCjARoHMNr3gqrVszBg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9k/L2RjL0tvemhpa29k/ZV9CZWFjaF9Db2Fz/dGxpbmUuanBn",
        title: "Calicut Beach",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, repellendus veritatis. Debitis magnam perferendis, officiis dolorem corporis error itaque aliquam.",
        rating: "3",
        district: "kozhikode",
        touristAttraction: "Beaches and Lakes",
        month: "June"
    },
    {
        img: "https://imgs.search.brave.com/gyAgUb1jq7kRAKAy6Nobbk7wxyA8bmiVnVkz4LryS7o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubmF0aXZlcGxh/bmV0LmNvbS9pbWcv/MjAxNy8wMy9rYW5u/dXIyLTAyLTE0ODg0/NDk2ODUuanBn",
        title: "Kannur Fort",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, repellendus veritatis. Debitis magnam perferendis, officiis dolorem corporis error itaque aliquam.",
        rating: "4",
        district: "kannur",
        touristAttraction: "Historic Sites",
        month: "July"
    },
    {
        img: "https://imgs.search.brave.com/0Q-C98d3RpxZJbpsTklY6udBOmauOMicmEF2d5WpWaE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ibG9n/LnRob21hc2Nvb2su/aW4vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTgvMDMvMS4tUG9u/bXVkaS1lMTUyMTE5/NTEzNjU0NS5qcGc",
        title: "Ponmudi",
        description: "Ponmudi is a hill station in the Thiruvananthapuram district of Kerala, India. It is located 53.2 kilometers north-east of Trivandrum city at an altitude of 1100 m. Ponmudi offers breathtaking views, lush greenery, and cool climate, making it a popular tourist destination.",
        rating: "4",
        district: "thiruvananthapuram",
        touristAttraction: "Hill Station",
        month: "August"
    },
    {
        img: "https://imgs.search.brave.com/8IgR9p3eoup_9iLqnf3pn2dvWr0BdKIKCSMqkwkCCW8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dG91cm15aW5kaWEu/Y29tL3N0YXRlcy9r/ZXJhbGEvaW1hZ2Vz/L25hcGllci1tdXNl/dW0xLmpwZw",
        title: "Napier Museum",
        description: "The Napier Museum, also known as the Government Art Museum, is an art and natural history museum situated in Thiruvananthapuram, Kerala. It was established in 1855 and named after Lord Napier, the then Governor of Madras. ",
        rating: "4",
        district: "thiruvananthapuram",
        touristAttraction: "Museums",
        month: "October"
    },
    {
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/cc/c8/a8/savari.jpg?w=1000&h=-1&s=1",
        title: "Konni Forest Reserve",
        description: "The Napier Museum, also known as the Government Art Museum, is an art and natural history museum situated in Thiruvananthapuram, Kerala. It was established in 1855 and named after Lord Napier, the then Governor of Madras. ",
        rating: "2.2",
        district: "pathanamthitta",
        touristAttraction: "Wildlife Sanctuaries",
        month: "October"
    },
    {
        img: "https://imgs.search.brave.com/O728XZlmFq7tFnY1XVYlIKX0BxLEhuGdRYaaup_y2GU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/a2VyYWxhdG91cmlz/bS5vcmcvc2FiYXJp/bWFsYS9pbWFnZXMv/aG93LXRvLXJlYWNo/LXNhYmFyaW1hbGEu/cG5n",
        title: "Sabarimala Temple",
        description: "The Napier Museum, also known as the Government Art Museum, is an art and natural history museum situated in Thiruvananthapuram, Kerala. It was established in 1855 and named after Lord Napier, the then Governor of Madras. ",
        rating: "1",
        district: "pathanamthitta",
        touristAttraction: "Religious Monuments",
        month: "October"
    },
    {
        img: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/10/1e/b2/34.jpg",
        title: "Mangrove Forest",
        description: "The Napier Museum, also known as the Government Art Museum, is an art and natural history museum situated in Thiruvananthapuram, Kerala. It was established in 1855 and named after Lord Napier, the then Governor of Madras. ",
        rating: "3",
        district: "kollam",
        touristAttraction: "Wildlife Sanctuaries",
        month: "October"
    },
    {
        img: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/10/01/22/42.jpg",
        title: "Jatayu Earth's Center",
        description: "The Napier Museum, also known as the Government Art Museum, is an art and natural history museum situated in Thiruvananthapuram, Kerala. It was established in 1855 and named after Lord Napier, the then Governor of Madras. ",
        rating: "4",
        district: "kollam",
        touristAttraction: "Museums",
        month: "October"
    },
    {
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/bb/0a/87/thirumullavaram-beach.jpg?w=1200&h=-1&s=1",
        title: "Thirumullavaram Beach",
        description: "The Napier Museum, also known as the Government Art Museum, is an art and natural history museum situated in Thiruvananthapuram, Kerala. It was established in 1855 and named after Lord Napier, the then Governor of Madras. ",
        rating: "3",
        district: "kollam",
        touristAttraction: "Beaches and Lakes",
        month: "October"
    },
    {
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/92/53/58/alappuzha-beach.jpg?w=1200&h=-1&s=1",
        title: "Alappuzha Beach",
        description: "Alappuzha Beach, also known as Alleppey Beach, is one of the most popular beaches in Kerala, located in the coastal city of Alappuzha. It is renowned for its pristine sandy shores, tranquil backwaters, and picturesque sunsets. ",
        rating: "5",
        district: "alappuzha",
        touristAttraction: "Beaches and Lakes",
        month: "December"
    },
    
]

export default data;