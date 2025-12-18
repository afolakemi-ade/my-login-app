'use client';

import styles from '../styles/payfonteLanding.module.css';
import Image from 'next/image';
import { ChevronUp, ChevronDown } from "lucide-react";

export default function payfonteLanding(){
    return (
      <>
        <div className={styles.container}>
          <div className={styles.head}>
            <div>
              <button className={styles.button1}>
                <Image
                  src="/flag.svg"
                  alt="logo"
                  width={18}
                  height={18}
                  className={styles.flag}
                />
                <div className={styles.ngn}>Nigeria (NGN)</div>
              </button>
            </div>
            <div>
              <button className={styles.button2}>
                <Image
                  src="/flagpack.svg"
                  alt="flag"
                  width={24}
                  height={18}
                  className={styles.flag}
                />
                <div className={styles.en}>
                  EN
                  <div className={styles.icons}>
                    <ChevronUp size={7.27} className={styles.icon} />
                    <ChevronDown size={7.27} className={styles.icon} />
                  </div>
                </div>
              </button>
            </div>
            <div className={styles.header}>
              <div className={styles.logo}>
                <Image src="/Union.svg" alt="logo" width={24} height={3} />
              </div>
              <div className={styles.payfonte}>Payfonte</div>
            </div>
            <div>
              <button className={styles.blue}>Create Your Free Store</button>
            </div>
          </div>
          <div className={styles.subcontainer}>
            <div className={styles.stick}>
              <Image src="/stick.svg" alt="stick" width={2} height={808} />
            </div>
            <div>
              <div className={styles.sticks}>
                <Image src="/sticks.svg" alt="sticks" width={1039} height={2} />
                <div className={styles.stardiv}>
                  <div>
                    <Image
                      src="/Star.svg"
                      alt="star"
                      width={12}
                      height={12}
                      className={styles.star}
                    />
                  </div>
                  <div className={styles.bars}>For Bars & Restaurants Only</div>
                </div>
                <div className={styles.note}>
                  <span className={styles.open}>Open Your Online</span>
                  <span className={styles.open1}> Storefront</span> <br />
                  <span className={styles.opens}>in</span>
                  <span className={styles.open1}> Minutes</span>
                </div>
                <div className={styles.note1}>
                  Let your customer browse your menu, place orders, and pay
                  online-all
                  <br />
                  <span className={styles.with}>
                    without building a website.
                  </span>
                </div>
                <div className={styles.butt}>
                  <button className={styles.bluee}>
                    Create Your Free Store
                  </button>
                  <button className={styles.white}>
                    Create Your Free Store
                  </button>
                </div>
              </div>
              <div className={styles.stickss}>
                <Image src="/sticks.svg" alt="sticks" width={1039} height={2} />
                <div>
                  <div className={styles.winefood}>
                    <Image
                      src="/wine.svg"
                      alt="wine"
                      width={142.8}
                      height={200}
                      className={styles.wine}
                    />
                    <div>
                      <Image
                        src="/food.svg"
                        alt="wine"
                        width={300}
                        height={95.55}
                        className={styles.food}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.stic}>
              <Image src="/stick.svg" alt="stick" width={2} height={808} />
            </div>
          </div>
          <div className={styles.subcontainer1}>
            <div>
              <Image
                src="/drink.svg"
                alt="drink"
                width={74.72}
                height={186.7}
                className={styles.drink}
              />
              <span className={styles.why}>
                Why Use<span className={styles.whyy}> Payfonte </span> Store
              </span>
            </div>
            <div className={styles.fourboxes}>
              <div className={styles.box}>
                <div className={styles.smallbox}></div>
                <div className={styles.subhead}>No Technical Setup</div>
                <br />
                <div className={styles.subsub}>
                  No coding. No design skills. Just add your menu items, set
                  your prices,and you are ready to go.
                </div>
              </div>
              <div className={styles.box2}>
                <Image
                  src="/pizza.svg"
                  alt="pizza"
                  width={200}
                  height={86.23}
                  className={styles.pizza}
                />
                <div className={styles.smallbox2}></div>
                <div className={styles.subhead}>Instant Payments</div>
                <br />
                <div className={styles.subsub}>
                  Receive payments instantly and via card, USSD, bank transfer,
                  or mobile money.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.fourboxes}>
            <div className={styles.box3}>
              <div className={styles.smallbox}></div>
              <div className={styles.subhead}>
                Real-Time Order
                <br /> Tracking
              </div>
              <br />
              <div className={styles.subsub}>
                Keep track of every order in
                <br /> real-time—from cocktails to
                <br /> combo meals.
              </div>
            </div>
            <div className={styles.box4}>
              <div className={styles.smallbox}></div>
              <div className={styles.subhead}>Designed for Hospitality</div>
              <br />
              <div className={styles.subsub}>
                Built specifically for bars and restaurants—create your digital
                menu,accepts orders and get <br />
                paid all in one place.
              </div>
            </div>
          </div>
        </div>

        <section className={styles.subcontainer2}>
          <div className={styles.inner}>
            <div className={styles.feature}>Feature Section</div>
          </div>
          <div className={styles.boxx}></div>
          <div className={styles.boxxx}></div>
          <div className={styles.boxxxx}></div>
          <div className={styles.boxxxxx}>
            <div className={styles.pink}>
              <div className={styles.gins}>
                <Image src="/gin.svg" alt="gin" width={300} height={800} />
              </div>
              <div className={styles.two}>2</div>
              <div>
                <div className={styles.subpink}>Custom Online Upfront</div>
                <div className={styles.subsubpink}>
                  Upload your menu, branding, opening <br />
                  hours, and delivery/pickup options.
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className={styles.subcontainer3}>
          <div className={styles.features}>How it works</div>
          <div className={styles.motherbox}>
            <div className={styles.firstofthree}>
              <div className={styles.minii}>
                <div className={styles.step1}>Step 1</div>
              </div>
              <div className={styles.substep1}>Create Store Account.</div>
              <div className={styles.subsubstep1}>
                Login and create a store account, fill in <br />
                right details, include your sote logo.
              </div>
              <div>
                <Image
                  src="/mobs.svg"
                  alt="mob"
                  width={250}
                  height={619}
                  className={styles.mob}
                />
              </div>
            </div>
            <div className={styles.secondofthree}>
              <div className={styles.mini2}>
                <div className={styles.step2}>Step 1</div>
              </div>
              <div className={styles.substep2}>Create Store Account.</div>
              <div className={styles.subsubstep2}>
                Login and create a store account, fill in <br />
                right details, include your sote logo.
              </div>
              <div>
                <Image
                  src="/mobs.svg"
                  alt="mob"
                  width={250}
                  height={619}
                  className={styles.mob}
                />
              </div>
            </div>
            <div className={styles.secondofthree}>
              <div className={styles.mini2}>
                <div className={styles.step2}>Step 1</div>
              </div>
              <div className={styles.substep2}>Create Store Account.</div>
              <div className={styles.subsubstep2}>
                Login and create a store account, fill in <br />
                right details, include your sote logo.
              </div>
              <div>
                <Image
                  src="/mobs.svg"
                  alt="mob"
                  width={250}
                  height={619}
                  className={styles.mob}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
