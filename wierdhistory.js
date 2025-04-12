// Historical events for each day of the year
// Format: "month-day": [{ year: YYYY, event: "Description" }, {...}]
const historicalEvents = {
    "1-1": [
        { year: 1801, event: "The first use of the word 'science fiction' was reportedly in a newspaper advertisement for invisible ink." },
        { year: 1938, event: "The first batch of 'square' watermelons was grown in Japan, designed to fit better in refrigerators." },
        { year: 1962, event: "The Beatles were rejected by Decca Records, who said 'guitar groups are on their way out.'" },
        { year: 1976, event: "A man in Wales awoke from a coma speaking fluent Welsh, a language he had never learned before his accident." }
    ],
    "1-2": [
        { year: 1890, event: "A man in Arizona survived being struck by lightning seven times over the course of his life, earning him the nickname 'The Human Lightning Rod'." },
        { year: 1932, event: "During Prohibition, the U.S. government poisoned industrial alcohol, resulting in an estimated 10,000 deaths of people who drank it anyway." },
        { year: 1959, event: "The Soviet Union launched a mannequin named Ivan Ivanovich into space before sending humans to test safety systems." }
    ],
    "1-3": [
        { year: 1870, event: "Construction began on the Brooklyn Bridge, which was designed by a man who became paralyzed and directed the project from his bedroom window." },
        { year: 1924, event: "King Tutankhamun's tomb was opened, beginning the alleged 'Curse of the Pharaohs' that supposedly killed many involved with the excavation." },
        { year: 1977, event: "Apple Computer was incorporated, with a logo featuring Isaac Newton sitting under an apple tree that was only used for one year." }
    ],
    "1-4": [
        { year: 1903, event: "Thomas Edison electrocuted an elephant named Topsy to demonstrate the dangers of alternating current in his feud with Nikola Tesla." },
        { year: 1936, event: "Billboard magazine published the first music chart, based on sheet music sales rather than recordings." },
        { year: 1967, event: "The town of Jericho, Arkansas issued speeding tickets to UFOs reportedly flying too fast through their airspace." }
    ],
    "1-15": [
        { year: 1919, event: "The Great Molasses Flood occurred in Boston when a storage tank burst, creating a wave of molasses that killed 21 people and injured 150." },
        { year: 1943, event: "The Pentagon was completed after just 16 months of construction, despite being one of the world's largest office buildings." },
        { year: 1965, event: "Winston Churchill rejected a knighthood for the second time, one of the few people to decline this honor twice." }
    ],
    "1-27": [
        { year: 1888, event: "The National Geographic Society was founded, initially as a club for wealthy travel enthusiasts rather than a scientific organization." },
        { year: 1945, event: "Soviet troops liberated Auschwitz, discovering prisoners who had hidden in the camp's extensive tunnel system for weeks." },
        { year: 1984, event: "Michael Jackson's hair caught fire during the filming of a Pepsi commercial, resulting in serious burns and his first cosmetic surgeries." }
    ],
    "2-5": [
        { year: 1897, event: "The Indiana House of Representatives unanimously passed a bill that would have legally redefined the value of pi as exactly 3.2." },
        { year: 1924, event: "The Royal Greenwich Observatory accidentally broadcast the wrong time signal, causing widespread confusion across Britain for several hours." },
        { year: 1958, event: "The U.S. Air Force accidentally dropped a nuclear bomb near Goldsboro, North Carolina that failed to detonate only because of a single switch." }
    ],
    "2-14": [
        { year: 1876, event: "Alexander Graham Bell filed his patent for the telephone on the same day as Elisha Gray, beating him by just hours in a controversial race." },
        { year: 1929, event: "The St. Valentine's Day Massacre occurred in Chicago when Al Capone's gang murdered seven rival gang members disguised as police officers." },
        { year: 1990, event: "The Voyager 1 space probe took the famous 'Pale Blue Dot' photograph of Earth from 3.7 billion miles away, showing our planet as a tiny speck." }
    ],
    "2-28": [
        { year: 1866, event: "London's first ever traffic lights were installed outside the Houses of Parliament but exploded after just a month, injuring the policeman operating them." },
        { year: 1935, event: "DuPont scientist Wallace Carothers invented nylon, initially marketing it as 'artificial silk' before it became famous for women's stockings." },
        { year: 1953, event: "Francis Crick and James Watson announced to patrons at a pub that they had 'discovered the secret of life' after determining DNA's structure." }
    ],
    "3-11": [
        { year: 1702, event: "The first daily newspaper in England, The Daily Courant, was published by a woman, Elizabeth Mallet, who ran it from her coffee house." },
        { year: 1918, event: "The first case of Spanish Flu was reported at Fort Riley, Kansas, beginning a pandemic that would eventually kill more people than World War I." },
        { year: 1986, event: "The NFL adopted instant replay for the first time, then abandoned it after just three seasons before bringing it back again in 1999." }
    ],
    "3-23": [
        { year: 1857, event: "The first elevator was installed in a New York department store, complete with a fainting couch for ladies overwhelmed by the experience." },
        { year: 1912, event: "Wernher von Braun, who would later develop rockets for both Nazi Germany and NASA, was born to a family that opposed his interest in space." },
        { year: 1989, event: "Two chemists claimed they achieved cold fusion in a test tube, setting off a brief scientific frenzy before being widely discredited." }
    ],
    "4-1": [
        { year: 1915, event: "France began using carrier pigeons for aerial photography, strapping tiny cameras to birds to spy on German positions during World War I." },
        { year: 1957, event: "The BBC broadcast a hoax documentary about the Swiss spaghetti harvest, convincing many viewers that pasta grew on trees." },
        { year: 1976, event: "Apple Computer was founded by Steve Jobs and Steve Wozniak, with a third founder, Ronald Wayne, who sold his 10% stake for $800 two weeks later." }
    ],
    "4-15": [
        { year: 1912, event: "The Titanic sank after hitting an iceberg, with one passenger, Charles Joughin, surviving in the freezing water for hours because he was drunk." },
        { year: 1924, event: "Rand McNally published its first road atlas, leading to an immediate spike in cross-country road trips and family vacations." },
        { year: 1955, event: "Ray Kroc opened the first McDonald's franchise in Des Plaines, Illinois, after observing the original McDonald brothers' restaurant in California." }
    ],
    "4-27": [
        { year: 1667, event: "John Milton sold the copyright to 'Paradise Lost' for just £10, equivalent to about $2,000 today, in one of literature's worst deals." },
        { year: 1810, event: "Ludwig van Beethoven composed 'Für Elise,' but it wasn't published until 40 years after his death and may have been dedicated to someone else entirely." },
        { year: 1956, event: "Rocky Marciano retired as the only undefeated heavyweight boxing champion in history with a perfect 49-0 record." }
    ],
    "5-8": [
        { year: 1886, event: "Pharmacist John Pemberton first sold Coca-Cola as a medicinal syrup at Jacob's Pharmacy in Atlanta, Georgia, containing both cocaine and caffeine." },
        { year: 1945, event: "V-E Day marked the end of World War II in Europe, though the Pacific Theater would continue for several more months." },
        { year: 1980, event: "The World Health Organization officially declared smallpox eradicated, the only human disease ever completely eliminated through vaccination." }
    ],
    "5-19": [
        { year: 1780, event: "New England experienced 'The Dark Day' when smoke from massive forest fires and volcanic ash caused the sky to darken at noon, causing panic." },
        { year: 1935, event: "T.E. Lawrence (Lawrence of Arabia) died from injuries sustained in a motorcycle accident while swerving to avoid two boys on bicycles." },
        { year: 1962, event: "Marilyn Monroe sang "Happy Birthday" to President John F. Kennedy at Madison Square Garden, sparking rumors of an affair." }
    ],
    "5-30": [
        { year: 1806, event: "Andrew Jackson fought his first duel over a horse race bet, receiving a bullet near his heart that he carried for the rest of his life." },
        { year: 1911, event: "The first Indianapolis 500 was held, with Ray Harroun winning in a car he equipped with the first rearview mirror in racing." },
        { year: 1933, event: "The first broadcast of The Lone Ranger radio show aired, with the famous phrase 'Hi-Ho Silver, away!' originally being 'Hi-Yo Silver!'" }
    ],
    "6-4": [
        { year: 1896, event: "Henry Ford test-drove his first automobile, the Quadricycle, through the streets of Detroit at 4am to avoid traffic and police." },
        { year: 1940, event: "Winston Churchill delivered his famous 'We shall fight on the beaches' speech despite being extremely drunk, according to his secretary." },
        { year: 1974, event: "During a baseball game in Cleveland, the promotional '10-cent beer night' ended in a riot when drunk fans stormed the field and attacked players." }
    ],
    "6-15": [
        { year: 1752, event: "Benjamin Franklin performed his famous kite experiment during a thunderstorm, using a key attached to a kite to prove lightning was electrical." },
        { year: 1844, event: "Charles Goodyear patented vulcanized rubber after accidentally spilling rubber and sulfur on a hot stove, creating a waterproof material." },
        { year: 1919, event: "Alcock and Brown completed the first non-stop transatlantic flight, crash-landing in an Irish bog and being initially mistaken for aliens." }
    ],
    "6-25": [
        { year: 1867, event: "Lucien B. Smith patented barbed wire, which would transform the American West by allowing efficient fencing of large areas." },
        { year: 1947, event: "The first widely reported UFO sighting occurred when Kenneth Arnold reported seeing nine 'flying saucers' near Mount Rainier, Washington." },
        { year: 1984, event: "Prince released the album 'Purple Rain,' which contained a secret backwards message thanking God instead of the expected Satanic message." }
    ],
    "7-2": [
        { year: 1776, event: "The Continental Congress voted for independence from Britain on July 2, not July 4, prompting John Adams to predict it would be the great anniversary." },
        { year: 1900, event: "The first zeppelin flight took place over Lake Constance in Germany, with Count Ferdinand von Zeppelin himself piloting the aircraft." },
        { year: 1937, event: "Amelia Earhart disappeared over the Pacific Ocean during her attempt to circumnavigate the globe, leading to decades of conspiracy theories." }
    ],
    "7-17": [
        { year: 1821, event: "Spain sold Florida to the United States for just $5 million, or about 4 cents per acre, in the Adams-Onís Treaty." },
        { year: 1938, event: "Pilot Douglas Corrigan took off from New York heading for California but landed in Ireland instead, claiming his compass was broken." },
        { year: 1955, event: "Disneyland opened in Anaheim, California with a disastrous press preview day featuring melting asphalt, a gas leak, and a shortage of drinking water." }
    ],
    "7-28": [
        { year: 1851, event: "A total solar eclipse helped verify the existence of the planet Vulcan, which was later proven not to exist despite multiple 'sightings'." },
        { year: 1914, event: "World War I began one month after the assassination of Archduke Franz Ferdinand, whose car took a wrong turn that put him directly in front of his assassin." },
        { year: 1945, event: "A B-25 bomber crashed into the Empire State Building in dense fog, with one of the plane's engines flying through the building and out the other side." }
    ],
    "8-9": [
        { year: 1483, event: "The Sistine Chapel held its first mass, nearly 30 years before Michelangelo would begin painting its famous ceiling." },
        { year: 1930, event: "Betty Boop made her debut in the cartoon 'Dizzy Dishes,' originally appearing as a dog with long ears instead of earrings." },
        { year: 1974, event: "Richard Nixon resigned as President of the United States, the only president to ever resign from office, following the Watergate scandal." }
    ],
    "8-21": [
        { year: 1770, event: "Captain James Cook formally claimed eastern Australia for Great Britain while standing on an island that later became a prison colony." },
        { year: 1858, event: "The famous Lincoln-Douglas debates began, with the main topic being slavery, though Lincoln lost the Senate race that followed." },
        { year: 1911, event: "The Mona Lisa was stolen from the Louvre by an employee who simply walked out with it under his coat, remaining missing for two years." }
    ],
    "8-30": [
        { year: 1835, event: "The New York Sun published articles about civilization on the moon, including bat-winged humanoids, in what became known as the 'Great Moon Hoax'." },
        { year: 1909, event: "Burglar Charles Ziemer became the first criminal identified by fingerprints in America after leaving prints on a freshly painted railing." },
        { year: 1963, event: "The Hotline between Washington, D.C. and Moscow was established, initially using teletype machines rather than telephones." }
    ],
    "9-13": [
        { year: 1848, event: "Vermont railroad worker Phineas Gage survived an iron rod shooting through his skull, though it dramatically changed his personality." },
        { year: 1899, event: "Henry Bliss became the first person in the Americas to be killed in an automobile accident when he was struck by a taxi in New York City." },
        { year: 1922, event: "The highest temperature ever recorded on Earth was measured as 136°F (58°C) in El Azizia, Libya, though this record was later disputed." }
    ],
    "9-26": [
        { year: 1580, event: "Francis Drake completed his circumnavigation of the globe, having secretly been on a mission from Queen Elizabeth I to raid Spanish ports." },
        { year: 1928, event: "The first civilian licensed transmission of television in the United States occurred, showing only a small, blurry image of a woman's face." },
        { year: 1960, event: "The first televised presidential debate took place between John F. Kennedy and Richard Nixon, with radio listeners thinking Nixon won while TV viewers favored Kennedy." }
    ],
    "10-7": [
        { year: 1806, event: "Ralph Wedgwood patented carbon paper, originally as a means to help blind people write, not for making copies in business." },
        { year: 1913, event: "Henry Ford introduced the moving assembly line, reducing the time to build a car from more than 12 hours to just 2 hours and 30 minutes." },
        { year: 1952, event: "The first patent for a bar code was issued, though the technology wouldn't be used in grocery stores until the 1970s." }
    ],
    "10-18": [
        { year: 1767, event: "The Mason-Dixon Line was established, originally to resolve a border dispute between colonies, not to divide North and South in the Civil War." },
        { year: 1922, event: "The British Broadcasting Company (later Corporation) was founded, with a mission statement written on a single sheet of paper." },
        { year: 1954, event: "Texas Instruments announced the first transistor radio, the Regency TR-1, which would sell for $49.95 (equivalent to about $500 today)." }
    ],
    "10-30": [
        { year: 1938, event: "Orson Welles' radio broadcast of 'War of the Worlds' caused panic among listeners who believed an actual alien invasion was occurring." },
        { year: 1961, event: "The Soviet Union detonated the Tsar Bomba, the most powerful nuclear weapon ever created, with a yield of 50 megatons." },
        { year: 1974, event: "Muhammad Ali knocked out George Foreman in the 'Rumble in the Jungle' in Zaire, using his famous 'rope-a-dope' strategy." }
    ],
    "11-11": [
        { year: 1620, event: "The Mayflower Compact was signed, with several passengers making their mark with an X because they couldn't write their names." },
        { year: 1918, event: "World War I ended at the 11th hour of the 11th day of the 11th month, though thousands of soldiers died after the armistice was signed but before it took effect." },
        { year: 1926, event: "U.S. Route 66 was established, initially without paving for much of its length despite becoming known as 'America's Main Street'." }
    ],
    "11-24": [
        { year: 1874, event: "Joseph Glidden patented barbed wire, calling it 'The Winner' and transforming cattle ranching in the American West." },
        { year: 1859, event: "Charles Darwin published 'On the Origin of Species,' with the entire first printing of 1,250 copies selling out on the first day." },
        { year: 1963, event: "Jack Ruby shot Lee Harvey Oswald on live television while he was being transferred from Dallas Police Headquarters." }
    ],
    "12-5": [
        { year: 1933, event: "Prohibition ended in the United States when Utah became the 36th state to ratify the 21st Amendment, despite being one of the most temperance-supporting states." },
        { year: 1945, event: "Five U.S. Navy planes disappeared in the Bermuda Triangle during a routine training mission, leading to decades of conspiracy theories." },
        { year: 1952, event: "The Great Smog of London began, a severe air pollution event that lasted five days and killed at least 4,000 people." }
    ],
    "12-17": [
        { year: 1903, event: "The Wright brothers made their first powered flight at Kitty Hawk, though many newspapers initially refused to report it because it seemed too fantastic to be true." },
        { year: 1843, event: "Charles Dickens published 'A Christmas Carol,' which he wrote in just six weeks because he was in desperate need of money." },
        { year: 1989, event: "The first episode of 'The Simpsons' aired as a standalone Christmas special, with the family looking noticeably different than in later seasons." }
    ],
    "12-28": [
        { year: 1732, event: "The first performance of 'The Beggar's Opera' took place, featuring characters based on real criminals and politicians of the day." },
        { year: 1895, event: "The first commercial movie screening took place in Paris, with viewers reportedly running from the theater when seeing a train coming toward the camera." },
        { year: 1973, event: "The Endangered Species Act was signed into law by President Nixon, who had previously vetoed similar legislation." }
    ]
};

export default historicalEvents;
