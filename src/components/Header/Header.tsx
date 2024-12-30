import classes from './Header.module.css';
export interface HeaderProps {
  readonly name: string;
  readonly age: number;
}
const Header = ({ age, name }: HeaderProps) => {

  console.log(age, name);


  const headerStyleStartWithA: React.CSSProperties = {
    color: 'darkred',
  }
  const notheaderStyleStartWithA: React.CSSProperties = {
    color: 'darkgreen',
  }
  const ageStyle: React.CSSProperties = {
    background: age < 18 ? 'red' : 'green',
  }

  return (
    <div >
      
    </div>
  );
}
export default Header;