import Product from '../models/product';

const PRODUCTS = [
  new Product(
    'p1',
    'u1',
    'Slippers',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0S7HLNJeDSUpCMJqrEolOxpwAtiWxGJV35h_a9Vc8aOgK8UbaBRXtp6451Ns_e0h6CvYK0hs&usqp=CAc',
    'Reforce Slippers & Flip Flops, perfect for days with raine weather.',
    29.99
  ),
  new Product(
    'p2',
    'u1',
    'Jogging Suits',
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSExMWFRUXFxgaFhYXGBoYGhoXGB0XGBcYGBcYHiggGB8lGxoXITEhJSkrLi4uGB8zODMtNygtLisBCgoKDQ0IDw0NDisZFR04OCsrKysrKysrKysrOCsrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAwQFBgcBAgj/xABIEAABAwEEBAoFCwMEAAcAAAABAAIDEQQSITEGQVFxBSIyYYGRobHB8AcTUnKyIzNCYoKSosLR4fEUJFM0Y3PSFiVDZIOTo//EABUBAQEAAAAAAAAAAAAAAAAAAAAC/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A22DkjclEnByRuSiAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhQfC2krIHmP1b3uFK0ugYioxc7wQTiFSbTpvJQlsDWgAmrn38uZtFHT6VWw/SDMuSG6yGjOpGJQaOuOcBngssl4QtL+VK8/bdTqGCbmNzsXOr0V7Sg1GXhOBvKljG97e6qaS6S2Ruc7O09wWb+oGuvSad1E4giZqaN9Knrog0iwcLwT/NSsedgOPVmnyzng6csljeBk6h9059i0ZALjsiurjsigi0IQqEjByRuSiTg5I3JRSBCEIBCEIBCEIBCEIBCEIBCEIBCEIBZ3pQ7+6lyOLfhatEWccOOraJT9cjqw8EERaBVjxtae5eJiTG4/VqN4F7wS1o5Ltx7ik5G1hPuH4CgVczHPavWpdAqAugIPDwlbOceheK4ldhOvuQPGYjz52rQrBNfjY7a0E76Y9qzuEc/mqu+jMlYAPZc4fm8UEquOyK6uOyKCLQhCoSMHJG5KJODkjclFIEIQgEIQgEjarUyJt+Rwa3aTToSyp+nVqa3A43GXqH6xLQeynTzoHU+nViaSA5zyPZaRj9qiSGncB5MUp+5/3WUQzgSGppeJPkqWjttKNcQfZd4GuSDRP/GsVaGKTouH8ycWLTGyyPayr2OcQ1t9hALjQAXhUA4jMrMJbVU8ykeBoHlwlIpTGOubjle90VrXWUGvIXGuqAV1AIQhALMbZJee9/tOceskrSbTJdY52xpPUKrMAMAg8StqCNoPcUmRWMDazw/dKyatx7v3Xhh4jfc8AgUj5I3eC7Tz/C8Wc8Vvuju1JQBB5I5kNGPnBeiM/BcG9AvZ36upW/RN3EePrA9Yp4KnwK2aIHCT7P5kFiXHZFdXHZFBFoQhUJGDkjclEnByRuSikCEIQCEhbLZHE0vkeGNGsmmJyA2k6gMSqpbdLppDds0Xq2/5bQ0gnYWQAh23llhBHJKC4krPfSBM18rSxwJayhIxzLqtOo7lyWd7sZJXyHWXEAdDGgMbswFdpKi+EIgQfOfnsQVPhGyRlpfW44U2lueNQAS3bhXI4Jbg/gpzmistK5i4cOtw7gnMgLaEsvtDxfFbvFrVxvCtMAcvGqV4GcfUsOJIFDhXGp19CB7ZrIyMVILyMauoeoZdfWpKEPcRibxzJr0CupR7XP10b1kjoUvY47oz6d6D3ZvSzYIX/wBNaG2iJ0fFvuiJa4N4t4BpL6GlQS1XPgXSKyWsVs9ojl2hrheHvM5TekKmcIcGw2ht2aNko1XhWm45g7lTeE/RpESH2aZ8LgatB44B+q6oe3fUoN5QsIsvCmkPB+ThbIm6ifXYDnN2Wu4lWfR/00WWQiO2RPsslaE4vjB+tQB7OltBtQaFw66lnl9xw6xTxWdlXrhm1sksb5I3texzQWvaQ5pBIFQRgQqOUCYbjWopT+fBJwMo1vuNHUM+1LLjkHiAUY0cwBO7BKgLmrz5C6EHHbF5HnIL28eedJ4IHMHgVatEMpPsfmVVhqB5yCtWiGUm9v5kFiXHZFdXHZFBFoQhUJGDkjclEnByRuSikCiuG+GWQUjDm+ue1xjY4nJtAXEDGgLhsrWlRmJVfPDuHX2nh+1PJJa0SQx7AyJzWim8hzt70F5tMDzJ62WR80h+k7ANGyNgwjbqwxNBeLs0sXJATmlDqXqRyD1K5N5nBezqXCUEZwhGAxx5u/DxSlnZRrQBqARwqyrA3a5o66nwCdFuPh585IOWaME7ubCqftOtNokvVAux+9KesTZrl6DujsQL+s5lFcN8A2a1NpNEHHU8cV7dzhj0GoT4yavJXguNK69h25IKDIbRwIaNmM1imeGyRuzYeVeDcg6jSatoHUIIHFKugcCAQQQQCCMiDiCOjwUFprB6yz2luZEd9u+P5TDnqCOtR/o44V9bZfVE8aE3ecxuxYejFv2AgtpKTLkXknIfP85IFoXJUKJhtd2UMOTsuY/vl1KVCDrgkqJRyQns4fSrnNFa8V1K8xI1UOqncgfMCtOhxqx5529yptmstyrgXONDi416jRXTREUY/eO5BPrjsiurjsigi0IQqEjByRuSiTg5I3JRSPMr7oLjkAT1L5b0BBc+a0uzLx2m+/vb1L6S0ptPqrFapPYgmd91jj4LANDLLcsbDreXPPSbo/C1qC+TEIa+gFcjkU1scwcwVJy2ndt5l01bhXDztQPKZ86UaSRXx8E2hfWuPY39Esyu2vV+iBtbxxox/uDs/lOaYptbCfWRZZuNN1NiXqeYIFIxr89KU9Y2tLwrsqDmNmrDFeA49+un6ptJYonEuLKlwxq92umQyacBiMcEDwPGo15880DPNMrPYYmuq1grmCTeOvGrjXWU7J8/uEBfrs89iHS7Ofs/lJSSUx7z55kiySriNg7cfABB5EYcTXI1BG0HUsx0MkNj4SdZ3HBxdEa7Qb0Z6aAfbWqQ49/6rMfSXZHQWyO0MwMjWvB/3IiAewRoNKNedIzvpRJ2W1NlYyVuT2hw3EVp/K9Wkm6grGkczg5t3lXgRvB4tOnuCvL4nNc5juU0kHeDQqt8D2H1/CFnZTASNcdzeOe4q66TQ3bS/wCtdd1gA9oKCOK8Eknz5K9FeAUDgOwO5W7RIcR/vDuVOBwNVcNEDxH+8O5BPrjsiurjsigi0IQqEjByRuSiTg5I3JRSKx6TZwzgq2k4Vge3peLg7SFlPB9mMcMTDm1jWneBQ7sarS/SoQ6yRwnKa0QtI2iMmdw+7EVQrSMcvPnvQeLC7MbD58VIGTV3qKiwfvHaMU+BqUDqF3GKeNNfP6Jg3HuTxrssPOtA2tTvlo+YP7k5B50ytPz7Key5PAUHtp8cfOS9Vp58+QvDXc+5dcfP7IFAKheHnyV1pNcdfnXkvTwCMMUDcnnUfYJbz5D9Y9mHgnc8l2uqgKidHjUc5JrvNaiiCfHn9uZVb0nWH1li9ZTjQvDgafRcQxw6y0/ZVpGGqoTa2wtmjkhdWkjHMPNeBFejNBU9ALdfslw5xPc3oPHb8RHQrFM7BZ96OrSWTSwmoLmAkbHRm6RTbxj1K+POCCW9HFlvW4vP0I3HpNGdxKtGm0NHxv2tLT9kgj4imHows+M8nutH4ifyqe0zhrAHey8HoNW95CClg1CTZj+38L31ryM0DhW3Q48ST3h3KoBWzQ12Eo52/mQWRcdkV1cdkUEWhCFQkYOSNyUScHJG5KKRSPSK6stlZStBPIPeaI4x+GV6qUzKqb090iidboLGwX3xte6Zw/8AT9ZcDGHndnTmbtwj5o6jDYggLa665h+sB14eKe2c0HSmfDTeKw677OxwTuBtaBA8jOXPrTgJEHEJUFA2m/1DcfoHvKdgjHzuTF3z49w/EdifHsGaDo/XsXptF5/Tcu3ujzgg9Aj9F7dkvDxjkuyDBA2c289rfac1vW4DuSvDlhEFulaBRr3esbs4+LvxXupeuBoi60QjV6xp+6Q7wU/6Q7JQwzgazG7p4ze5/WggpBz+fOtItdQ159qUa7DzVJvBz7wgzOez/wBPwyWjBr3kjnErCeq+SOhXd4w6lV/SFFctljn9q6D/APHICex/YrVK1Bono8gu2W97cjj0CjfAqZ4bgvwSt+oSN4xHaAkNFoLlkhG1gd9/jeKlCEGV1wXGpS2RXHuZ7Li3qJCTiQKtVn0MdxpBzN7Cf1VXG5WHQ93yzhtYewtQXFcdkV1cdkUEWhCFQkYOSNyUScHJG5KKR8/cG8LyettcczKltrno44E/KPJodZDqiurAalPQW8HbWmRz6AUnw1wpFJbLVG28GxzFt8s+TLzi9taZh99p3DakprKSAKA0yIG3mJ8UDXhySoGGRGXin9kbhVQXCsb42374DcuMcKnIY49RU7FS6KIF2ZpUJGMZVTiuqqBmfn/sHvKejPxKZV+X2Vj8SngFUHoba4r0D5z615p/KUaT+3Yg6MRu2HzRcky3hdUNb+HRHO2EsqC5jS+80caQ0YAw8Z2JFSMq68UE7onjaod7uxrirvpXZfWWSUAVLW3272cag30p0qj6Fu/vIxsMnwuWnEVwQZJZ5g5tQUvRQrXepnkg9h7mY6w0kDsoepTEMgJAOzmQU/0swf2sL9bJSPvsce9gU0x15rXDWAesV8UvphwU61WSSJlL5ALNl5hDgOaoqPtKL4CdWywE/wCFnY1oQbfwSKQRf8bPhCdpGxtpGwbGtHYEsgz7S+z3LS46ngOG/kntBPSoaGmSuWndlrGyQfRdQ7nfuB1qmg0QOS7A7lMaLPpaW84cOyvgoRo7f0UhwDJS0RHa6n3gR4oNEXHZFdXHZFBFoQhUJGDkjclEnByRuSikYlbrU6S124ChYy0vYGasA0upz3y812le7ObvFBI2NdTDmBpimOj777ZJv81onk335H07AD0qYcwHVUbM+pBF8KxgscHjCh4p+kSMAnVlPFb7o7go7heA3Xa6ZHM+72KQY0tN05tN07xge5A7jOXnqSwOxN43JwD57EDR3z/2D3lPcPP6pmf9RsrGe8p0OdB6DtmC9t24c/nWvIGHmnYuDagVGxUXSezudb4yGk3P6V5cKAN+VeONhWhugYU8FeSNnVkFXeG3XZnH/wBve/8AqkDvz9qCxaGOpboxzyYfYetUWS6Iu/v4fff8DwtaQYnw2wyWmaQihdI68ABUUwpjWmAAquNjj5ydji7xS3CFsM1qnPEa4yO4tDVt3i01Y4VPOShwc0VIvAZihB6i6qA/pnFp9UQHEGgaAMaYVNcqlVjQOR7rIA/6DnsGvAXTSvMSR0KZ0ukd/QzPhcQ4MaeLgaXm3yDr4l4qP9H8H9pCPac/p45HcAg+g4xQAbAF6QhBHaQWf1lmlbrukje3jDtCzUYha0QsoniuPez2XOb0AkIPUSXsEl2SN2x7T1OFU1jP7L24+e1Bqy47IpOyyXmNd7TQesVSjsigi0IQqEjByRuXLXLcY93stJ6gSuwckblG6XWj1dhtcns2eZ3UxxUjINF4S2ywtP8AjZUbwD4lS0gqNSZcED5OMHU0dYCenzX9ECcUAfPCylQ+RjTuLhj1VXLX8/L/AMsnxFS2icN+2RbG3ndTSPiIUK6W897vac49BJPigXZn5GPilWHn5vNUiNQS9fJQNT8/ujPxFPKpow/Ln3B39ieBBxruvoXou2rh8/yvJcOhAqPNP0Vb0qhvHfZbW3pIhI7irGK0URw8eNCPaMjeuJ7qfhQP9F31t0Dtrgetp/Va8sY0Wk+XsrvrRdtAtnQY3w3dktU7wKNMjsq6sK9NK05yhkTaYN3Z9ORTW0m7NKMx6x/xHJSDGU3+T4oI3SS0yQWWaaM0exoIJ42JcBk6oOB1pTR2y+qZZotYEYO+rb3bVc0njv2SZm1rQecl7fFP+DW1tMI/3WfE1BryEIQCznSuC5a3nU4Nd1ih7QVoypen8HHifta4fdII+IoKxXFdcc14dqXXavOxBp3AT62eE/7bR1CngnrsiovRZ9bLEeYjqc4KUdkUEWhCFQkYOSNyrvpMmucFW0/7D2/fF3xVig5I3KoemB3/AJVMB9J8DegzRV7FIpVjwApklXvoMTTz01SVmyp560jwkeLXZjRBZ9ACDPK8ZMhIO8kU7GlVix8kHaFbfRzZiYLU8fSowfZa4/nCqEDcBWqB4Evqw8EgxKNd5y7UCLPn3V9gd6eAjUmcbvl3e4O9O73R534oPS48IJ60AjVrx/VB4Dqbk04WsrJWgOvC668C0lrgaFpoW4irXEdKeuG/v3pCTZ4IEuCqMmiIwAkYegOC2dYq03TXYtpqgxUCsrz9d3eTVPHO2JlYHXgTtxOO3HxT0Dmp57EDe3/NOwrx4h/+jMuhSGjrK2yBv1q9Qc7wUTwm4h1nZkHyOLvdZG9w/FcU7oOy9bWu2B5G66RX8SDUEIQgFW9Ooqwsd7MnYWuHfRWRROlUV6yycwDvukE9lUGbu6l5c7Aba9lP2Q7HX/C8vGB2oNH0NfWyt5nP+InxU07Iqu6BPrZa/XPc0qxOyKCLQhCoSMHJG5Vv0k2MS2CQVpdfC/fcljdd6aUrzqyQckblBaeuIsT+d0Y/G0+CkZrA8DPDNI2+QXSMN/inLMk3tEN8hjRi8ho3uNB3oNM0E4PMNgYHCjnhzz9vk/hurObMcAtojYAABkBQbgqxwloVE8l0TjESaltLzK8wwLeunMgo4aPP7L2AFMWrRW1R4hokG1h8DQ9VVFSQvYaPa5h2OBHegZt/1B/4x8QT04/ymjR8udnqx3hPAUHkjDCvWP1Xl4qcQlKLmSBEx7MNxPcvLq6ylSUk8oE2C6QdhB6lsuYWUWHgaeagZG6h+kQQ3feOC1WJtGgbAAgxTg9pHFpiMMdqfsbUjI7UlKQZZTtlefxFLRDf1lA34SiLnxPyoJOt3qwPwgqd9HYra3nU2J1PvRj9VBcIuoQBs1knE7+YBWn0YWT56Un2WDtce9qC+oQhAJvwjDfikZ7THDrBCcIQY9e14+dlF4cc6pbhCEskewCl17m57CQE3OFa96C9+jd9bK7mld8LFanZFU70Xn+3lGyY/AxXF2RQRaEIVCRg5I3LssbXAtcA4HMEVB6CuQckbkopEVaNHLI/OFo92rPhITWDRCyskbIGuqwhzQXEi8MQeehxU+hAIQhALjmgihFRsK6hBHzcB2Z2JhZXaG3T1tokDozZf8f43/8AZS6EEMdF7L7B++79V0aMWX/Gfvv/AOymEIIyPR+yjKFvTV3fVPIbHGzkRsb7rQO4JdCAQhCDNrRojamOdRokBJILSK0JqKh1DXrTSTgudnKheOe6T2haohBjNrBc40B2Uoa4cyvvo7s72WZ99rmkykgOBBpdYK46qg9StKEAhCEAhCEGZaWQBtrlpUVLTgSM2tqab6qGcw7Sr7pHo1JPL61j2CrQCHVGIrrAPMouPQy0E4ujA21J7LqCV9HgAsz6Cnyruu6xWd2RUbo/wT/TRGO9eJcXE0piQBQCvMpJ2RQRaEIVCRg5ISiEKQIQhAIQhAIQhAIQhAIQhAIQhAIQhAIQhAIQhAIQhAIQhAIQhALy/IoQgjEIQqH/2Q==',
    'Brand Name: Chilazexpress, Gender: Men, Collar: Stand, Closure Type: Zipper, Fit: Fits true to size, take your normal size.',
    99.99
  ),
  new Product(
    'p3',
    'u2',
    'Coffee Mug',
    'https://images.pexels.com/photos/160834/coffee-cup-and-saucer-black-coffee-loose-coffee-beans-160834.jpeg?cs=srgb&dl=bean-beans-black-coffee-160834.jpg&fm=jpg',
    'Can also be used for tea!',
    8.99
  ),
  new Product(
    'p4',
    'u3',
    'Baby Cloths',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmgQoMEFxqyYFYboRVeAKIFSkA_WqIC20Mqg&usqp=CAU',
    "Buy Hangon Baby firal kids dresses",
    15.99
  ),
  new Product(
    'p5',
    'u3',
    'DressBerry',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQThylhoc0j-dTiOzL-tSLxuyqPBI-adMmn8VbKa3UZHFkmkwO6HOJc7_Rs794wUOYhZycPV7Dhmg&usqp=CAc',
    'Awesome footwear, DressBerry women navy blue solid ',
    599.99
  ),
  new Product(
    'p6',
    'u1',
    'Laptop',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJy0GpDa7Q-2SWUaBGmZWUpiY1-WsfIUIZ6XCGTszLFFaZM3mh65zEgqt7MmfIE7xb3XFLiZMf&usqp=CAc',
    "Lenovo Ideapad Slim 3 AMD Ryzen 3 15.6 inch Full HD Thin and Light Laptop (4GB/1TB HDD/Windows 10/MS Office 2019/Platinum Grey/1.85Kg), 81W10057IN",
    2239.99
  )
];

export default PRODUCTS;
