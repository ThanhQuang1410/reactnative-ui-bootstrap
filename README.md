# react-native-bootstrap

Apply bootstrap style in website to your react-native project. Easy use for developer move from web dev to react-native dev.

## Installation

Easy installation.

```bash
npm install react-native-bootstrap
```

## Usage
If you are new in web-development, please see [Bootstrap Documents](https://getbootstrap.com/docs/4.0/layout/overview/). If you've already have experience in web-development, please Enjoy!

| Support Class                    |               Breakpoint Support                | Support Class                    |               Breakpoint Support                |
| -------------------------------- | :---------------------------------------------: | -------------------------------- | :---------------------------------------------: |
| ``row``                          | ``md`` and ``lg``                               |``d-block``                       | ``md`` and ``lg``                               |
| ``col``                          | ``md`` and ``lg``                               |``d-none``                        | ``md`` and ``lg``                               |
| ``col-2``                        | ``md`` and ``lg``                               |``badge``                         | no support .                                    |
| ``col-3``                        | ``md`` and ``lg``                               |``badge-primary``                 | no support .                                    |
| ``col-4``                        | ``md`` and ``lg``                               |``badge-secondary``               | no support .                                    |
| ``col-6``                        | ``md`` and ``lg``                               |``badge-success``                 | no support .                                    |
| ``col-8``                        | ``md`` and ``lg``                               |``badge-danger``                  | no support .                                    |
| ``col-9``                        | ``md`` and ``lg``                               |``badge-warning``                 | no support .                                    |
| ``col-12``                       | ``md`` and ``lg``                               |``badge-info``                    | no support .                                    |
| ``offset-1``                     | ``md`` and ``lg``                               |``badge-light``                   | no support .                                    |
| ``offset-2``                     | ``md`` and ``lg``                               |``badge-dark``                    | no support .                                    |
| ``offset-3``                     | ``md`` and ``lg``                               |``badge-light``                   | no support .                                    |
| ``offset-4``                     | ``md`` and ``lg``                               |``card-title``                    | no support .                                    |
| ``offset-5``                     | ``md`` and ``lg``                               |``card-subtitle``                 | no support .                                    |
| ``offset-6``                     | ``md`` and ``lg``                               |``align-items-start``             | no support .                                    |
| ``offset-7``                     | ``md`` and ``lg``                               |``align-items-center``            | no support .                                    | 
| ``offset-8``                     | ``md`` and ``lg``                               |``align-items-end``               | no support .                                    | 
| ``offset-9``                     | ``md`` and ``lg``                               |``align-self-start``              | no support .                                    |
| ``offset-10``                    | ``md`` and ``lg``                               |``align-self-center``             | no support .                                    | 
| ``offset-11``                    | ``md`` and ``lg``                               |``align-self-end``                | no support .                                    | 

``md`` for break point when device width value is greater 576 and less or equal 768.
<br/>
``lg`` for break point when device width value is greater 768.

<b>How to use class.</b>

```javascript
import {Div} from 'reactnative-bootstrap'

...
      return(
        <Div className={'row'}>
          <Div className={'col-6 col-md-9'}>
            ...Some content here
          </Div>
        </Div>
      )
...
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

Thanks for your interested.

## License
[MIT](https://choosealicense.com/licenses/mit/)
