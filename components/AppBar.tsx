import { FC } from 'react'
import styles from '../styles/Home.module.css'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import Image from 'next/image'

export const AppBar: FC = () => {
    return (
        <div className={styles.AppHeader}>
            <span className='Appbar-title'><span className={styles.AppbarTitleRed}>Movie</span> Reviews🍿</span>
            <WalletMultiButton className={styles.wallet}/>
        </div>
    )
}