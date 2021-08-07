import Link from 'next/link';

const Header = () => {
  return (
    <h2 className="italic tracking-tight md:tracking-tighter leading-tight text-white bg-gray-900 px-7 py-2 text-center">
      <Link href="/">
        <a className="text-xl md:text-2xl font-bold hover:underline font-serif">
          MySignature
        </a>
      </Link>
      <div className="text-xs font-mono font-light -mt-1 text-gray-400">
        make your signature
      </div>
    </h2>
  );
};

export default Header;
