const Title = ({ title, subtitle, align, font }) => {
  return (
    <div className={`flex flex-col justify-center items-center text-center ${align === "left" && "md:items-start md:text-left"}`}>
      <h1 className={`text-4xl md:text-[40px] ${font || 'font-playfair'}`}>{title}
        <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-174'>{subtitle}</p>

        </h1>
      
    </div>
  )
}

export default Title
