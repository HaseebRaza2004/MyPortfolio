// App.jsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiChevronRight } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';
import {
  SiNextdotjs,
  SiTypescript,
  SiFirebase,
  SiMongodb,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiJavascript,
  SiHtml5
} from 'react-icons/si';

const App = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      tech: ["React", "Node.js", "MongoDB"],
      description: "Full-stack solution with payment integration",
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxANDw8NDQ8NDQ8NEA0PDw4QDxAPDw8QFREYFhYRFRUYHSggGB0lHRcTJDEiJSkrLjouFx8zOD8tNygtLisBCgoKDg0OGhAQGy8mICYrMC0zMi8tLTEtLy8tLy0tNS0tLS0tLS0tLS01LS0tLS0tLSstLS0tLS0tLS0tLS0tL//AABEIAKoBKQMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQIEBgcFA//EAD8QAAICAQIDBAcGAwUJAAAAAAABAgMRBBIFITEGE0FRFCIyYXGBkQcjQlKhsWJywRU0gtHhMzWDkpOywvDx/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAIEAQMFBv/EADIRAQACAgAFAQYEBQUAAAAAAAABAgMRBBIhMUETBSIyUXGxYYHB8BQzkaHRNEJSgvH/2gAMAwEAAhEDEQA/AOzgSkBOAJwAwAwAwAwAwAwAwAwAwAwAwAwAwAwAwAwAwAwAwAwAwAwAwAwAwAwAwAwAwAwBGAIwBDQEYAsgLICcATgBgCcAMAMAMAMAMAMAMAMAMAMAMAMAMAMAMAMAMAMAMAMAMAMAMAMAMAMAMARgBgCrQEMCoFkBZAWQEgAJAAAAAAAAAMAAAAAAAAAAABgAAAAMAAAAAAAgCMAQwKsCoEoC6AsgJAASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAgCGBRgQAQF0BZASBIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAqwKsCoBAXQFkBZAAJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIYACAIYFGBAEIC6AsgLIABIAABWc1FOUmkoptt8kkvEDmnan7SZKUqeHKOI5T1ElnL/gj/VkJsNYjxfiV8ZXvWalY9hKxwUnnnyWFgr34iK3iqtk4mtLRWf8Axl8G+0LXaaSV8vSq8+tGxJWL4SS6/HJviyxt1fgPG6eIUq/TyyukoPlOEvyyROJ2y9IyNT4/2r7uTq02JSXKVj5pPyS8TTfLrpC9g4ObxzX7NVv4rqLHmd9r+E2l9EaZvafK/XBjr2rC+k41qaXmF1j/AIZNzi/kxGS0eWL8Nit3j+jdOz3aSOq+7sSru8F+Gfw/yLFMkWczPw04usdYe+bFZr3a3tXTwyCTXe3zX3dKfN/xS8kbsWGck/g05c0Y4/Fzvi/HuK6hyxqIwcectNprIqyte9L1n9WXq4MdfDm24u1vOnm8K4vxLnbXq7oQi8Ssuu+6z5evnL9yJTipPhj+IvXzLeuzvbqXeQ0vElXCdii6tTW06bE+jflnzKmXhtRuq5g4uL9LN9RUXWLxHXQ08N83/LHxkzXly1xV5rMTOmo63j19r9WTrj4Rhyf1ONl47Lefd6Q1zaVJ06uEe9ffxj1zueV72s5XzITHE1jnnm/qdWTw7tHbW0rX3sPN+0vn4m7B7QvWdZOsf3ZizbdNfG2KnB5jLoditotG4bH1JAAAAQBAEMCjAgCEBdAWQFkAAkAAA0D7WeNyppr0dbxLUZlY117tPG35v9iNpYlyrT1b5xh+ZpP4eJqvblrMoZL8lJs2izChhcksJLyRyI6224czM9ZeDxWrElNfi6/FHR4e245Z8OlwWTmrNZ8PU7C8blodZW8/dXyjVbHwxJ4Uvin/AFLMSuut9reIPT6Z7Xidr7uL8s9X9DOS3LVZ4XF6mSIns59CqKip2OSUs7YxScpY6vn0WfEqa+bsTae1UuqEk3U5ZisyhNLO3xaa648eSGo8G5ifeUvq2Yae6E1mMsYyvFNeDT5NCY0zW21sOlwmpONnKeF1guscvzfXHljzHbqx0vuJ7Ol6XikZaRaufKMapWT921Pd+zL1Pe1ry4OWvp2mJ8OHWay7X6x6lxnbKVsZuKTeyCllR9ySR2KVildQ4WW/NuZ8syXB5LVW3WXV0113SslNWx7yMZTbi8L2W+XXzJNPP7sREPpxXT+mpWV3abdVv31Ru+6jBy5WJtLD54YYrPL3hhcZ0NtdWmzBuNdTUrI+tBOVkpJbly6NfUQnS0TMuo/ZpxqWs0eyx7rNLJVSb6yjjMW/ly+RzeJpy36eXX4bJzU6+GNxjUPVaru0+W+NUPJZljP1PNcXknNm5I7b0nM7lZWRom6dJW7L05Rd00nLcuvdw6Lo+Yi1cduTFG7dtz+kHbs+Oijq5yd9PfSbfOeeUvc88n8CGKOImeem/wB/Ujb7umGplKudb02pSlLCWK54Wecfwv4E+SuaZravLf8AtP5Hd9uyWtcbHS36tibivKSNvs7NPN6c/Vmk+G3HYbAAAAgCAIYFGBAEIC6AsgLIABIAABx37W1L+0IZ9l6evb/zyyQt3Yanwx/ew/xfsyvn/lyrcX/Kl79z9R/L9zmx3cjw8nij9SP839GXOH+KVzgfjn6PNSeVjrlY+OeRcdN2bt8n3emz5zz8dq/1I5+0OjwHxS1vUOvFe6Nr+6qw4zgl054Ti/Hd+ppnS/Xm6613lXTzrUswhdKW2fJ2QxjY859XyyI0Wi2usx+/zW0DjGObcbJS+7TWV3q/Hj8q5Z8+S8OSv4l9zPu9/wBPl9fkxb1JTkrPby9zbzlvnnPjnzMfVOsxMdOzZmpf2DqsZ/2eox/Lnn/Uv8J3r9XC9pfFfXy/RzjUxsnp6vRsuiMF30a/aV34nYlzafLDfLB2XnI1zTvu9DVuKhpe/wBrhCVPpqSe7e613e/zW3+oQjvOvyfbW2aeWpoek7rEY2vUuCSq9H2+spY5dM/oGIi3LPMwL4an0uyenyo+q1PpQqdq27m+W3bjkwnHLy9W5fZa4vU8RdH+xbp2Y5RzmfT3dce7BT4ztV0OB3qd/g+uj/vNWevpFWf+ojxtN+vG/wDlH3Wo7s3h/wDvH/j6j/zN2H/V/wDaf1Sj4n0snHuqI6iu7Cg3XZTPk4t+KfLcTmY5KxkrPbpMfvufVkQra1NEnOc1PT2bd8VGxRUJYUsdX7zbETGas73us9+/byeXk8Az6TTj836YZT4LfrV/fhGvdv56JuAAACAIAhgUYEAQgLoCyAsgAEgAAGh/atwOWoohq6k5T025TS6up9X8n+7I2hiXJIScWpLqmmjXMRMalG0RaJiWw03d7VKcfwpOa/L6yXP5tHOtjmttONfDalprLxtbfvlhdI/q/Fl3DTljq6PC4fTrue8vc7AcDlrtZBtPudPKNtsvDk8xh83+mTdEbWoda7VcOep00lFZnW98V546r6GcleaNLHDZfTyRM9nPI2raoWxk9mdrjJRnHLy48001nLx72VN/N2Zid7rKe+jFNVxktyxKUpJy2+MY4WFn5jfyOWZ7vnfa5vONqSxGK6RiuiX/AL4sT1ZrGn0rUru7qjHdPO2DXXa+kX54fT/5hHXojaYpu09nTNLw2MdKtJJZi63XP37l637svV93WvDhZbepMzPlw3WcOt0Gt9GnKdbjbCKnFuO6tyWJJrwaOxS8XruHDy05Zmssv+2Lnq7KpQV8JXWQdHdQcnFTaSzjnjrz5ciTRyRy7fTi+rnpIxjTGjFjnu1EKKlCWJcqljKysc8+IYpHN3YHGdVZbVpXOcnvqbcc4i2rZJS2rlzWPoE6RETOnV/s54I9Fo07Ftt1L72afWKxiMX8v3OZxGTnv07Q7HD4+SnXyw+N6aWm1PeRXJzVsM9Mp5x9TznGY5xZueO0zv8ANO0al9dJqtO7lqErYW7pPuUlOM5yTXqy8Ob8TOPJhnJGSNxPy+cz+JExvb4aOGthJ1V97XjnJN4rjnxy+SXwNeKOJrPJXcfZjqvPVQolKfeS1WocZRdmX3UMrDx+b9iU5aYpmd81vn4j/JvTJ7I6Fubva9WCcY+9s3ezsM7nJP0hKkeW2HXTAABgQBAEMCjAgCEBdAWQFkAAkAAAiSTTTSafJp9GgOd9qPs2VspXcPlGuUsuVE+UM/wP8Pw6EZqxpq+m7LcS061Ffol0u/pdOYSrccuyEst7umIyXzI8ozOC/Zrq7pJ6px0tfisqdrXkkuS+bMxWTTqfBuE06GpUaeGyK5t9ZTl+aT8WS0yzjI1jj/ZWN7dunarsfOUH7En5+5mq+Lm6wuYOLmnu26w1W/gWqreJUWP3xW9fVGicdo8L9eJxT/uX0nZ3V2vCplBfms9RL68zMY7SxbisVfO/o3LgHZ2Gk9eTVlr/ABY5R90f8zfTHFXNz8RbL07Q9w2K7wu1HZijicErMwthnu7o+1H3PzXuNuLLbHPRqy4q5I6uecZ7L8Xq3RjGOohJYlbQq422L+N4Un+perxGOfwc63B2rPSNvO4V2a4rFuFWmthGftRuVaqfvcZ8v0JTnxx5Y/hr28N67Odhe7sjquIThfdFR7uqEUqasdElhZx8MFTLxM26V7LeDhYp1lu5VXGPrtHC+DhYsrwfin5o15MdcleW3ZiY21LXdnbq2+7Xex8Me180cjL7PyV+DrH90JrL4yp1k4qqUdRKC6Ralj/U1zj4m0ckxOmNSzeHdmrJNSv+7j+Vc5P/ACN+H2daZ3k/ozFfm2qimNcVCCUYx5JHXrWKxqGx9DIAAAEAQBDAowIAhAXQFkBZAAJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAQwIYFGBAEIC6AsgLIABIAAAAxNfxKjTbXqLa6VPKi5yUdzXXGSNrRXvKF8lafFOmRTdGyMbISU4TSlGUXlSi1lNMzE76wlExMbhiS4vp1b6O76e+yo91vW/c1nGPgY5671vqh6tObl3G2cSbAABgWca0sJOEtRTGUW1KLmk011TI89fm2xgyTG4rK+m4rp7pKFV1VknlqMZJvl1EWie0sWw3rG5hmEmsAAeZr+0Gj003VqNVp6bEk3CdkYyw+jwydcd7RuIQtlpWdTK+g47pNVLZp9Tp7pflhbGUvpnItjtXvBXJS3aXoEEwAB8L9ZVXJQsshCUsYUmk3zwa75aUnVpiGNvpdbGuLnNqMY9ZN4SJWtFY3aejKKLo2RU4SU4vOJJ5TFL1vG6zuB9CQAAAACAIAhgUYEAQgLoCyAsgAEgAAADRftS9nSfz3ftEq8V2hz+P7VfPsxx/wBC0+q02p5WaHe64t+0nLGxf4mvlJeRjFk5KzW3hjBm9Olq271a/wACjY+IaO27LlqbO/y+slKU1u+bi/lg1Y988TPlWw83rVmfPX7uvHQdoAAc1ttohrdRLVwlZX3l6UYvD3b+T6r3lTcc07dqIvOKsUnU9Gw9mrdDbc/RabK7K4OW6Um1htJr2n5m3HNJnpCnxMZq19+ejaTcogADkvbGumfHq46raqJLTq3dLZHZtfWWVg6GGZjDPL3UM2pzRzdmF20o0Gnt0suDTi79zbVNsrUpJru2nl4k3lYySwze0T6nZDPFImPT7uywzhZ64Wfic10lgAGp9ra3O+mC6ygor4ubRx/aNZtlrEeY/Vrv3QuJuzSX6e7Ktqiks9ZJSS5+9GI4ibYLY7/FEG+mnsdmP7rX8bP+9l3gP5Ffz+6Vez1S4kAAAACAIAhgUYEAQgLoCyAsgAEgAAADT/tD4ddqY6ZUVTt2TsctqztTUcZK/EVm0RpS4zHa8V5Y2r2n7HS1morvqlXXGShHUbm1Lk0t0cJ5e3lzx0RjLg5rbhjPws5LxaPzV4pwm3+1dFZTTP0eiuiDnFepBRc+XyTQtSfUiYjoXxW9esxHSI/y3QsrwAA0WOn1en1l+oq0srVOdyW6L2uMp5ysfAratFpmIdTmxXxVrNtdntcK4hrLLowu0ipre7dYk1jCbXj54NlbW31hWy4sUV3W25bAbVQAAc17T9nLdXxquc9PbZpJqiNtizGO1RefWTTXh0LuLLFcU9eqllxTbLHTo+eu7MW8L4lRquH6Wep0yxKVa+9lW/Zmk5POcPcn55XQzGaMmOa3nUsThnHkiaRuHTYvKT581nmsP6FFeSAA1/jmksnqtPOEJSjHZuklyWLM8zncVivbNS1Y6Rr7oWjqjtJwZ2ff0xzPkpxXWS8JL3keN4Sb+/SOvktXbP7P0yr08ITi4STnmL6r1mWeDpamGItGp6/dmvZ6RaSAAAABAEAQwKMCAIQF0BZAWQACQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAEMCGBRgQBCAugLICyAASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAgCGBRgVAIC6AsgJAkAAAASAAAAAAAAAAAAAAAAAAAAAAAAAAACAAEAVYFWBUAgLoCyAkABIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAwKsCrAqAQFkBZASAyBIAAAAAAAAAAAZAAMgMgAAAAAAAMgMgAGQAAAAAAQBVgVYEAQgLJgTkCcgMgTkBkBkBkBkBkBkBkBkBkBkBkBkBkBkBkBkBkBkBkBkBkBkBkBkBkBkBkBkCMgQ2BVgVAASBYAgJAASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAgCrAgD/9k="
    },
    {
      title: "Social Media App",
      tech: ["Next.js, Firebase"],
      description: "Real-time platform with authentication",
      image: "data:image/png;base64,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"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl -z-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Navigation */}
      <nav className="fixed w-full p-6 flex justify-between items-center z-50 backdrop-blur-md bg-black/30">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            DevPortfolio<span className="text-blue-400">.</span>
          </h1>
        </motion.div>

        <div className="hidden md:flex space-x-8">
          {['About', 'Skills', 'Work', 'Contact'].map((item, i) => (
            <motion.a
              key={item}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-cyan-400 transition-all flex items-center group"
            >
              <span className="mr-2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-all">↳</span>
              {item}
            </motion.a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex items-center px-6 lg:px-20 relative">
        <div className="grid lg:grid-cols-2 items-center gap-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Transforming Ideas Into
              <TypeAnimation
                sequence={[
                  'Digital Experiences',
                  2000,
                  'Web Solutions',
                  2000,
                  'Scalable Products',
                  2000
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              />
            </h1>

            <p className="text-xl text-gray-300 font-light">
              Full-stack developer specializing in modern web applications with focus on performance and user experience.
            </p>

            <div className="flex space-x-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-full text-white font-semibold flex items-center"
              >
                View Work <FiChevronRight className="ml-2" />
              </motion.button>

              <div className="flex space-x-4 items-center">
                <FiGithub className="text-2xl text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
                <FiLinkedin className="text-2xl text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
                <FiMail className="text-2xl text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
              </div>
            </div>
          </motion.div>

          {/* 3D Model Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative h-96 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl backdrop-blur-xl border border-white/10 flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-grid-white/5" />
            <div className="text-4xl text-white/30">3D Model</div>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="pb-32 px-6 lg:px-20 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-12 text-center"
          >
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Picture */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center"
            >
              <div className="relative w-72 h-72 rounded-2xl overflow-hidden">
                <img
                  src="/profile.jpg" // Replace with your profile picture
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-sm" />
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white">
                Hi, I'm [Your Name]
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate web developer with expertise in building modern, responsive, and user-friendly web applications.
                With a strong foundation in <span className="text-cyan-400">React</span>, <span className="text-blue-400">Next.js</span>,
                and <span className="text-green-400">Node.js</span>, I love turning ideas into reality through clean and efficient code.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee.
              </p>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 rounded-full text-white font-semibold hover:scale-105 transition-transform">
                Download Resume
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 lg:px-20 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-20 text-center"
          >
            My <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: SiNextdotjs, name: 'Next.js', color: 'from-purple-500 to-indigo-600' },
              { icon: SiTypescript, name: 'TypeScript', color: 'from-blue-500 to-cyan-500' },
              { icon: SiFirebase, name: 'Firebase', color: 'from-amber-500 to-orange-500' },
              { icon: SiMongodb, name: 'MongoDB', color: 'from-green-500 to-teal-500' },
              { icon: SiTailwindcss, name: 'Tailwind', color: 'from-cyan-400 to-blue-500' },
              { icon: SiReact, name: 'React', color: 'from-sky-400 to-blue-500' },
              { icon: SiNodedotjs, name: 'Node.js', color: 'from-green-500 to-lime-500' },
              { icon: SiExpress, name: 'Express', color: 'from-gray-500 to-gray-700' },
              { icon: SiJavascript, name: 'JavaScript', color: 'from-yellow-400 to-amber-500' },
              { icon: SiHtml5, name: 'HTML5', color: 'from-orange-500 to-red-500' },
            ].map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity`} />
                <div className="relative bg-white/5 rounded-2xl backdrop-blur-lg border border-white/10 p-6 flex flex-col items-center hover:bg-white/10 transition-colors">
                  <skill.icon className={`text-5xl mb-4 text-white group-hover:scale-110 transition-transform`} />
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                  <p className="text-sm text-gray-400 mt-2">Expert</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 lg:px-20 relative bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-16 text-center"
          >
            Specialized <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                description: "Crafting high-performance web applications with React/Next.js, Tailwind CSS, and modern architecture patterns.",
                icon: "💻",
                color: "from-cyan-500 to-blue-600",
                delay: 0.1
              },
              {
                title: "Mobile Development",
                description: "Building cross-platform mobile apps with React Native, Expo, and Firebase for seamless user experiences.",
                icon: "📱",
                color: "from-purple-500 to-indigo-600",
                delay: 0.3
              },
              {
                title: "Backend Development",
                description: "Developing scalable REST APIs & microservices using Node.js, Express, MongoDB, and Redis.",
                icon: "⚙️",
                color: "from-amber-500 to-orange-500",
                delay: 0.5
              }
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: service.delay, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative group h-full"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`} />

                <div className="relative bg-white/5 rounded-2xl backdrop-blur-xl border border-white/10 p-8 hover:bg-white/10 transition-all h-full flex flex-col">
                  <div className="text-5xl mb-6 animate-float">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 flex-grow">{service.description}</p>
                  <div className="mt-6">
                    <span className="inline-block px-4 py-2 bg-white/10 text-cyan-400 rounded-full text-sm font-medium">
                      Learn More →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-32 px-6 lg:px-20 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-white mb-20 text-center"
          >
            Featured Projects
          </motion.h2>

          <div className="flex overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                className="min-w-[90vw] md:min-w-[50vw] snap-center px-4"
              >
                <div className="relative h-96 bg-gray-800 rounded-3xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  <img src={project.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />

                  <div className="absolute bottom-0 left-0 p-8 z-20">
                    <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-300">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 lg:px-20 relative">
        <div className="max-w-4xl mx-auto backdrop-blur-lg bg-white/5 rounded-3xl border border-white/10 p-12">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-white mb-12 text-center"
          >
            Let's Collaborate
          </motion.h2>

          <form className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <input
                type="text"
                placeholder="Name"
                className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <textarea
                rows="5"
                placeholder="Message"
                className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              ></textarea>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-center"
            >
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-12 py-4 rounded-full text-white font-semibold hover:scale-105 transition-transform">
                Send Message
              </button>
            </motion.div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 mt-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-gray-400 text-sm">
            © 2024 DevPortfolio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;