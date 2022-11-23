import styles from './index.module.scss';
export function Header() {
  return (
    <div className='p-120px text-center'>
      <p className={styles.header}>This is Header</p>
      <div className="font-bold text-2xl mb-2">NIN hao</div>
      <button 
      bg="blue-400      hover:blue-500 dark:blue-500 dark:hover:blue-600"
      text="sm white"
      ont="mono light"
      p="y-2 x-4"  
      border="2 rounded blue-200">Button</button>
      <span className='flex-c'>shortuts</span>
    </div>
  )
  
}