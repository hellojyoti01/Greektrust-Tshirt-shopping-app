import React from 'react'
import s from '../styles/Navigation.module.css';
import cartIcon from '../../public/cart_icon.svg'
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
function Navigation() {

    const cart =  useSelector((store) => {
        const { cart =[]} =store.product
        
        return cart
      })
  return (
      <div className={s.nav_container}>
          <div className={s.nav_wrapper}>
              <div className={s.left_nav}>TeeRex Store</div>
              <div className={s.right_nav}>
                  <div className={s.product}><p>Products</p><div></div></div>
                  <Link href='cart'>
                  <div className={s.cart}>
                     
                          <Image src={cartIcon} alt="cart" />{!!cart.length ? cart.length  : "" }
                     
                      </div>
                      </Link>
              </div>
          </div>
      </div>
  )
}

export default Navigation