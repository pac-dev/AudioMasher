
ugen_ref = {
   "abs": {
      "Args": [
         "v1"
      ],
      "Outputs": 1,
      "Description": "Performs absolute value."
   },
   "add": {
      "Args": [
         "v1",
         "v2"
      ],
      "Outputs": 1,
      "Description": "Performs addition."
   },
   "biscale": {
      "Args": [
         "v1",
         "min",
         "max"
      ],
      "Outputs": 1,
      "Description": "Scales from bipolar [-1, 1] to [min, max]."
   },
   "sub": {
      "Args": [
         "v1",
         "v2"
      ],
      "Outputs": 1,
      "Description": "Performs subtraction."
   },
   "mul": {
      "Args": [
         "v1",
         "v2"
      ],
      "Outputs": 1,
      "Description": "Performs multiplication."
   },
   "div": {
      "Args": [
         "v1",
         "v2"
      ],
      "Outputs": 1,
      "Description": "Performs division."
   },
   "floor": {
      "Args": [
         "v1"
      ],
      "Outputs": 1,
      "Description": "Performs flooring, returning the integer part."
   },
   "frac": {
      "Args": [
         "v1"
      ],
      "Outputs": 1,
      "Description": "Returns the fractional part of item on the stack."
   },
   "log": {
      "Args": [
         "v1"
      ],
      "Outputs": 1,
      "Description": "Performs natural logarithm."
   },
   "log10": {
      "Args": [
         "v1"
      ],
      "Outputs": 1,
      "Description": "Performs base 10 logarithm."
   },
   "round": {
      "Args": [
         "v1"
      ],
      "Outputs": 1,
      "Description": "Performs rounding to nearest integer."
   },
   "scale": {
      "Args": [
         "v1",
         "min",
         "max"
      ],
      "Outputs": 1,
      "Description": "Scales from unipolar [0, 1] to [min, max]."
   },
   "sine": {
      "Args": [
         "freq",
         "amp"
      ],
      "Outputs": 1,
      "Description": "Simple sine oscillator."
   },
   "c": {
      "Args": [
         "init value"
      ],
      "Outputs": 1,
      "Description": "Constant generator, used for feedback loops."
   },
   "max": {
      "Args": [
         "f",
         "f"
      ],
      "Outputs": 1,
      "Description": "Returns the greater of two items on the stack."
   },
   "min": {
      "Args": [
         "f",
         "f"
      ],
      "Outputs": 1,
      "Description": "Returns the lesser of two items on the stack."
   },
   "mix": {
      "Args": [
         "f..f"
      ],
      "Outputs": 1,
      "Description": "Sums up remaining items on stack."
   },
   "metro": {
      "Args": [
         "frequency"
      ],
      "Outputs": 1,
      "Description": "Creates clock signal."
   },
   "tenv": {
      "Args": [
         "trig",
         "attack",
         "sustain",
         "release"
      ],
      "Outputs": 1,
      "Description": "Triggerable linear envelope generator. Values in seconds."
   },
   "tenv2": {
      "Args": [
         "trig",
         "attack",
         "release"
      ],
      "Outputs": 1,
      "Description": "Two-step triggerable linear envelope generator. Values in seconds."
   },
   "fm": {
      "Args": [
         "frequency",
         "amplitude",
         "carrier (1)",
         "modulator (1)",
         "index (8)"
      ],
      "Outputs": 1,
      "Description": "A simple FM oscillator."
   },
   "mtof": {
      "Args": [
         "Note number"
      ],
      "Outputs": 1,
      "Description": "Converts MIDI note number to Hz."
   },
   "dup": {
      "Args": [
         "f"
      ],
      "Outputs": 2,
      "Description": "Duplicates last item on the stack."
   },
   "swap": {
      "Args": [
         "f",
         "f"
      ],
      "Outputs": 2,
      "Description": "Swaps last two items on the stack."
   },
   "drop": {
      "Args": [
         "f"
      ],
      "Outputs": 1,
      "Description": "Removes the last item on the stack."
   },
   "revsc": {
      "Args": [
         "in1",
         "in2",
         "feedback (0.97)",
         "cutoff (10000)"
      ],
      "Outputs": 2,
      "Description": "Stereo reverb module from reverbsc Csound opcode."
   },
   "gen_sine": {
      "Args": [
         "ftable name",
         "size"
      ],
      "Outputs": 1,
      "Description": "Generates a sine wave ftable."
   },
   "osc": {
      "Args": [
         "freq",
         "amp",
         "phase",
         "ft name"
      ],
      "Outputs": 1,
      "Description": "Wavetable lookup oscillator"
   },
   "gen_vals": {
      "Args": [
         "name",
         "args"
      ],
      "Outputs": 1,
      "Description": "Generates an ftable from a space delimited set of values."
   },
   "tseq": {
      "Args": [
         "trig",
         "mode",
         "ft name"
      ],
      "Outputs": 1,
      "Description": "Triggered sequencer. modes: 0 = normal, 1 = shuffle."
   },
   "in": {
      "Args": [
      ],
      "Outputs": 1,
      "Description": "Read a float from STDIN."
   },
   "port": {
      "Args": [
         "htime (0.02)"
      ],
      "Outputs": 1,
      "Description": "Applies portamento to a signal."
   },
   "prop": {
      "Args": [
         "bpm",
         "prop string"
      ],
      "Outputs": 1,
      "Description": "Parses prop code to produce a set of triggers"
   },
   "noise": {
      "Args": [
         "gain"
      ],
      "Outputs": 1,
      "Description": "White noise generator."
   },
   "dcblk": {
      "Args": [
         "f"
      ],
      "Outputs": 1,
      "Description": "dc block filter."
   },
   "butlp": {
      "Args": [
         "in",
         "cutoff"
      ],
      "Outputs": 1,
      "Description": "Butterworth lowpass filter"
   },
   "buthp": {
      "Args": [
         "in",
         "cutoff"
      ],
      "Outputs": 1,
      "Description": "Butterworth highpass filter"
   },
   "maygate": {
      "Args": [
         "trig",
         "probability (0.5)",
         "mode"
      ],
      "Outputs": 1,
      "Description": "Random selection of gate or no gate. output mode: 0 = gate 1 = trigger"
   },
   "maytrig": {
      "Args": [
         "trig",
         "probability (0.5)"
      ],
      "Outputs": 1,
      "Description": "Random selection of trig or no trig."
   },
   "randh": {
      "Args": [
         "min",
         "max",
         "freq"
      ],
      "Outputs": 1,
      "Description": "Random number generator with hold time."
   },
   "randi": {
      "Args": [
         "min",
         "max",
         "freq"
      ],
      "Outputs": 1,
      "Description": "Randomized line segment with interpolation"
   },
   "rot": {
      "Args": [
         "f",
         "f",
         "f"
      ],
      "Outputs": 3,
      "Description": "Stack rotate. s: 1 2 3 -> 2 3 1"
   },
   "rpt": {
      "Args": [
         "in",
         "trig",
         "bpm",
         "div",
         "rep",
         "bufsize (1)"
      ],
      "Outputs": 1,
      "Description": "Stutterer / repeater (bufsize in seconds)"
   },
   "reverse": {
      "Args": [
         "in",
         "delay"
      ],
      "Outputs": 1,
      "Description": "reverse delay"
   },
   "samphold": {
      "Args": [
         "in",
         "trig"
      ],
      "Outputs": 1,
      "Description": "sample and hold"
   },
   "delay": {
      "Args": [
         "in",
         "feedback",
         "deltime"
      ],
      "Outputs": 1,
      "Description": "feedback delay"
   },
   "switch": {
      "Args": [
         "trig",
         "sig1",
         "sig2"
      ],
      "Outputs": 1,
      "Description": "toggle between two signals"
   },
   "mode": {
      "Args": [
         "in",
         "freq (500)",
         "Q (50)"
      ],
      "Outputs": 1,
      "Description": "modal filter"
   },
   "clip": {
      "Args": [
         "in",
         "limit (1)"
      ],
      "Outputs": 1,
      "Description": "clip limiter / distortion"
   },
   "p": {
      "Args": [
         "num"
      ],
      "Outputs": 1,
      "Description": "p register get"
   },
   "pset": {
      "Args": [
         "val",
         "num"
      ],
      "Outputs": 1,
      "Description": "p register set"
   },
   "eq": {
      "Args": [
         "v1",
         "v2"
      ],
      "Outputs": 1,
      "Description": "conditional equals"
   },
   "lt": {
      "Args": [
         "v1",
         "v2"
      ],
      "Outputs": 1,
      "Description": "conditional lt"
   },
   "gt": {
      "Args": [
         "v1",
         "v2"
      ],
      "Outputs": 1,
      "Description": "conditional greater than"
   },
   "ne": {
      "Args": [
         "v1",
         "v2"
      ],
      "Outputs": 1,
      "Description": "conditional not-equal to"
   },
   "branch": {
      "Args": [
         "gate",
         "sig1",
         "sig2"
      ],
      "Outputs": 1,
      "Description": "returns signal based on state of gate (0 = sig1, 1 = sig2)"
   },
   "pos": {
      "Args": [
      ],
      "Outputs": 1,
      "Description": "returns playing time, in seconds"
   },
   "count": {
      "Args": [
         "trig",
         "max",
         "mode"
      ],
      "Outputs": 1,
      "Description": "clock counter. mode: 0 = loop, 1 = one-shot"
   },
   "f": {
      "Args": [
         "num"
      ],
      "Outputs": 0,
      "Description": "Call a user defined function"
   },
   "gen_sinesum": {
      "Args": [
         "name",
         "size",
         "args"
      ],
      "Outputs": 1,
      "Description": "Summation of harmonically related sines. based on GEN10."
   },
   "gen_line": {
      "Args": [
         "name",
         "size",
         "args"
      ],
      "Outputs": 1,
      "Description": "Generates a line from ordered list of breakpoints."
   },
   "gen_composite": {
      "Args": [
         "name",
         "size",
         "args"
      ],
      "Outputs": 1,
      "Description": "Generate a composite waveform of sinusoids."
   },
   "dmetro": {
      "Args": [
         "time"
      ],
      "Outputs": 1,
      "Description": "Trigger envelope, using time instead of frequency"
   },
   "pluck": {
      "Args": [
         "trigger",
         "freq",
         "amp",
         "ifreq (110)"
      ],
      "Outputs": 1,
      "Description": "plucked instrument. ifreq sets the lowest frequency (buffer size)."
   },
   "jcrev": {
      "Args": [
         "input"
      ],
      "Outputs": 1,
      "Description": "Chowning reverb"
   },
   "moogladder": {
      "Args": [
         "input",
         "cutoff",
         "res"
      ],
      "Outputs": 1,
      "Description": "Moog ladder lowpass filter"
   },
   "tget": {
      "Args": [
         "index",
         "table"
      ],
      "Outputs": 1,
      "Description": "Get value from table"
   },
   "tset": {
      "Args": [
         "index",
         "value",
         "table"
      ],
      "Outputs": 1,
      "Description": "Set value of table"
   },
   "line": {
      "Args": [
         "trig",
         "ia",
         "idur",
         "ib"
      ],
      "Outputs": 1,
      "Description": "line segment"
   },
   "expon": {
      "Args": [
         "trig",
         "ia",
         "idur",
         "ib"
      ],
      "Outputs": 1,
      "Description": "exponential line segment"
   },
   "dur": {
      "Args": [
      ],
      "Outputs": 1,
      "Description": "returns duration of sporth patch (in seconds)"
   },
   "ling": {
      "Args": [
         "trig",
         "N",
         "mode",
         "code"
      ],
      "Outputs": 1,
      "Description": "Evaluates a string of ling code. (0 = int mode, 1 = binary mode)"
   },
   "mincer": {
      "Args": [
         "time",
         "amp",
         "pitch ratio (1)",
         "winsize (2048)",
         "ftable"
      ],
      "Outputs": 1,
      "Description": "Phase-locked vocoder"
   },
   "tblsize": {
      "Args": [
         "ftable"
      ],
      "Outputs": 1,
      "Description": "Get size of table (in samples)"
   },
   "tbldur": {
      "Args": [
         "ftable"
      ],
      "Outputs": 1,
      "Description": "Get duration of table (in seconds)"
   },
   "blsaw": {
      "Args": [
         "freq",
         "amp"
      ],
      "Outputs": 1,
      "Description": "Band-limited sawtooth oscillator"
   },
   "blsquare": {
      "Args": [
         "freq",
         "width (0.5)",
         "amp"
      ],
      "Outputs": 1,
      "Description": "Band-limited square oscillator with pulse-width"
   },
   "bltriangle": {
      "Args": [
         "freq",
         "amp"
      ],
      "Outputs": 1,
      "Description": "Band-limited triangle oscillator"
   },
   "bitcrush": {
      "Args": [
         "bitdepth (8)",
         "samplerate (10000)"
      ],
      "Outputs": 1,
      "Description": "bitcrusher. bitdepth: 1 - 16"
   },
   "dist": {
      "Args": [
         "pregain (1)",
         "gain (1)",
         "shape1 (0)",
         "shape2 (0)"
      ],
      "Outputs": 1,
      "Description": "Distortion"
   },
   "tenvx": {
      "Args": [
         "trig",
         "atk",
         "hold",
         "rel"
      ],
      "Outputs": 1,
      "Description": "Exponential Envelope Generator. Values in seconds, hold > atk"
   },
   "pan": {
      "Args": [
         "in",
         "pan"
      ],
      "Outputs": 1,
      "Description": "Equal power panning. -1 = hardL 1 = hardR"
   },
   "jitter": {
      "Args": [
         "amp",
         "cpsMin",
         "cpsMax"
      ],
      "Outputs": 1,
      "Description": "Jitter control signal"
   },
   "vdelay": {
      "Args": [
         "in",
         "feedback",
         "deltime",
         "maxdelay"
      ],
      "Outputs": 1,
      "Description": "variable delay with feedback"
   },
   "zitarev": {
      "Args": [
         "in2",
         "in1",
         "delay",
         "lf_x",
         "rtlo",
         "rthi",
         "hfdmp",
         "eq1f",
         "eq1l",
         "eq2f",
         "eq1l",
         "mix",
         "lvl"
      ],
      "Outputs": 2,
      "Description": "zitareverb module"
   },
   "pinknoise": {
      "Args": [
         "amp"
      ],
      "Outputs": 1,
      "Description": "pink noise generator"
   },
   "allpass": {
      "Args": [
         "revtime",
         "looptime"
      ],
      "Outputs": 1,
      "Description": "allpass filter"
   },
   "atone": {
      "Args": [
         "cutoff"
      ],
      "Outputs": 1,
      "Description": "atone filter (hipass)"
   },
   "autowah": {
      "Args": [
         "level",
         "wah",
         "mix"
      ],
      "Outputs": 1,
      "Description": "autowah"
   },
   "phasor": {
      "Args": [
         "freq",
         "phase"
      ],
      "Outputs": 1,
      "Description": "Normalized sawtooth wave."
   },
   "tphasor": {
      "Args": [
         "trig",
         "freq",
         "phase"
      ],
      "Outputs": 1,
      "Description": "Triggerable normalized sawtooth wave."
   },
   "zeros": {
      "Args": [
         "name",
         "size"
      ],
      "Outputs": 1,
      "Description": "Generate table of zeros"
   },
   "tabread": {
      "Args": [
         "index",
         "scaled (1: yes, 0: no)",
         "offset",
         "wrap",
         "ftname"
      ],
      "Outputs": 1,
      "Description": "read from table with interpolation"
   },
   "tblrec": {
      "Args": [
         "in",
         "trig",
         "tbl name"
      ],
      "Outputs": 1,
      "Description": "records values to table."
   },
   "tog": {
      "Args": [
         "trig"
      ],
      "Outputs": 1,
      "Description": "toggle switch that can be triggered on/off"
   },
   "tick": {
      "Args": [
      ],
      "Outputs": 1,
      "Description": "trigger at start of file. only use once"
   },
   "gen_padsynth": {
      "Args": [
         "ftname",
         "size",
         "base freq",
         "bandwidth",
         "amp table"
      ],
      "Outputs": 1,
      "Description": "padsynth algorithm by Paul Nasca Octavian"
   },
   "zrev": {
      "Args": [
         "in2",
         "in1",
         "rtlo",
         "rthi",
         "hfdmp"
      ],
      "Outputs": 1,
      "Description": "zitareverb module (simplified)"
   },
   "conv": {
      "Args": [
         "in",
         "delay",
         "ftbl impulse response"
      ],
      "Outputs": 1,
      "Description": "partitioned convolution"
   },
   "comb": {
      "Args": [
         "in",
         "rev time",
         "loop time"
      ],
      "Outputs": 1,
      "Description": "comb filter"
   },
   "streson": {
      "Args": [
         "in",
         "frequency",
         "gain"
      ],
      "Outputs": 1,
      "Description": "String resonator filter"
   },
   "gbuzz": {
      "Args": [
         "freq",
         "amp",
         "nharm",
         "lharm",
         "mul"
      ],
      "Outputs": 1,
      "Description": "Series of partials from the harmonic series"
   },
   "oscmorph4": {
      "Args": [
         "freq",
         "amp",
         "wtpos",
         "phase",
         "ft1",
         "ft2",
         "ft3",
         "ft4"
      ],
      "Outputs": 1,
      "Description": "4-table morphing oscillator"
   },
   "oscmorph2": {
      "Args": [
         "freq",
         "amp",
         "wtpos",
         "phase",
         "ft1",
         "ft2"
      ],
      "Outputs": 1,
      "Description": "2-table morphing oscillator"
   },
   "thresh": {
      "Args": [
         "in",
         "thresh",
         "mode"
      ],
      "Outputs": 1,
      "Description": "detect threshold crossings. mode: 0=from below, 1=above, 2=both"
   },
   "butbp": {
      "Args": [
         "in",
         "freq",
         "bw"
      ],
      "Outputs": 1,
      "Description": "butterworth bandpass filter"
   },
   "butbr": {
      "Args": [
         "in",
         "freq",
         "bw"
      ],
      "Outputs": 1,
      "Description": "butterworth band reject filter"
   },
   "drip": {
      "Args": [
         "trig",
         "num_tubes",
         "amp",
         "shake_max",
         "main freq",
         "res freq 1",
         "res freq 2",
         "decay"
      ],
      "Outputs": 1,
      "Description": "dripwater physical model"
   },
   "dust": {
      "Args": [
         "amp",
         "density",
         "bipolar"
      ],
      "Outputs": 1,
      "Description": "dust. bipolar = 1 unipolar = 0"
   },
   "dtrig": {
      "Args": [
         "trig",
         "loop",
         "delay",
         "scale",
         "tbl"
      ],
      "Outputs": 1,
      "Description": "delta trig. loop = 1 will loop the sequence"
   },
   "eqfil": {
      "Args": [
         "in(f) freq",
         "bw",
         "gain"
      ],
      "Outputs": 1,
      "Description": "eq filter"
   },
   "lpf18": {
      "Args": [
         "in",
         "freq",
         "res",
         "dist"
      ],
      "Outputs": 1,
      "Description": "low pass filter with tanh distortion"
   },
   "trand": {
      "Args": [
         "trig",
         "min",
         "max"
      ],
      "Outputs": 1,
      "Description": "triggerable RNG"
   },
   "fof": {
      "Args": [
         "amp",
         "fund",
         "form",
         "oct",
         "band",
         "ris",
         "dec",
         "dur",
         "iphs",
         "iolaps",
         "window table",
         "sine table"
      ],
      "Outputs": 1,
      "Description": "fof"
   },
   "fog": {
      "Args": [
         "amp",
         "dense",
         "trans",
         "spd",
         "oct",
         "band",
         "ris",
         "dec",
         "dur",
         "iphs",
         "iolaps",
         "window table",
         "wav table"
      ],
      "Outputs": 1,
      "Description": "fog"
   },
   "crossfade": {
      "Args": [
         "sig1",
         "sig2",
         "pos"
      ],
      "Outputs": 1,
      "Description": "crossfade two signals"
   },
   "vocoder": {
      "Args": [
         "atk",
         "rel",
         "bwq",
         "sig",
         "exc"
      ],
      "Outputs": 1,
      "Description": "32-band channel vocoder"
   },
   "pshift": {
      "Args": [
         "in",
         "shift (semitones)",
         "window size (samps)",
         "xfade (samps)"
      ],
      "Outputs": 1,
      "Description": "pitch shifter"
   },
   "srand": {
      "Args": [
         "seed"
      ],
      "Outputs": 1,
      "Description": "seed internal RNG"
   },
   "setdurs": {
      "Args": [
         "size"
      ],
      "Outputs": 1,
      "Description": "set total duration (in samples)"
   },
   "phaser": {
      "Args": [
         "inl",
         "in2",
         "max notch",
         "min notch",
         "width",
         "notch freq",
         "depth",
         "fdbk",
         "invert",
         "lvl",
         "lfobpm"
      ],
      "Outputs": 2,
      "Description": "stereo phaser"
   },
   "pareq": {
      "Args": [
         "in",
         "freq",
         "boost",
         "Q",
         "mode(0=peak, 1=low shelf, 2= high shelf)"
      ],
      "Outputs": 1,
      "Description": "parametric equalizer"
   },
   "posc3": {
      "Args": [
         "freq",
         "amp"
      ],
      "Outputs": 1,
      "Description": "high-precision oscillator with cubic interpolation"
   },
   "tdiv": {
      "Args": [
         "num",
         "offset"
      ],
      "Outputs": 1,
      "Description": "trigger divider"
   },
   "hilbert": {
      "Args": [
         "in"
      ],
      "Outputs": 2,
      "Description": "hilbert transform"
   },
   "tseg": {
      "Args": [
         "trig",
         "val",
         "dur",
         "curve",
         "init"
      ],
      "Outputs": 1,
      "Description": "trigger segment"
   },
   "wpkorg35": {
      "Args": [
         "in",
         "cutoff",
         "res",
         "saturation"
      ],
      "Outputs": 1,
      "Description": "wpkorg filter"
   },
   "waveset": {
      "Args": [
         "in",
         "rep",
         "buflen"
      ],
      "Outputs": 1,
      "Description": "waveset timestretching algorithm"
   },
   "ptrack": {
      "Args": [
         "in"
      ],
      "Outputs": 2,
      "Description": "pitch tracking (outputs: amp, pitch)"
   },
   "reson": {
      "Args": [
         "in",
         "freq",
         "bw"
      ],
      "Outputs": 1,
      "Description": "resonator filter"
   },
   "bpm2dur": {
      "Args": [
         "bpm"
      ],
      "Outputs": 1,
      "Description": "convert bpm to duration (seconds)"
   },
   "bpm2rate": {
      "Args": [
         "bpm"
      ],
      "Outputs": 1,
      "Description": "convert bpm to rate (Hertz)"
   },
   "pdhalf": {
      "Args": [
         "amount -1 to 1"
      ],
      "Outputs": 1,
      "Description": "casio phasor distortion"
   },
   "smoothdelay": {
      "Args": [
         "in(f) fdbk(f) del(f) maxdel(f) interp"
      ],
      "Outputs": 1,
      "Description": "smooth delay line"
   },
   "timer": {
      "Args": [
         "trig"
      ],
      "Outputs": 1,
      "Description": "timer"
   },
   "inv": {
      "Args": [
         "inv"
      ],
      "Outputs": 1,
      "Description": "inverse a signal 1/x"
   },
   "tgate": {
      "Args": [
         "trigger",
         "time"
      ],
      "Outputs": 1,
      "Description": "triggerable gate"
   },
   "set": {
      "Args": [
         "value",
         "name"
      ],
      "Outputs": 1,
      "Description": "sets variable"
   },
   "get": {
      "Args": [
         "name"
      ],
      "Outputs": 1,
      "Description": "gets variable"
   },
   "var": {
      "Args": [
         "name"
      ],
      "Outputs": 1,
      "Description": "creates variable"
   },
   "varset": {
      "Args": [
         "name",
         "val"
      ],
      "Outputs": 1,
      "Description": "creates and sets a variable"
   },
   "slick": {
      "Args": [
         "ftname"
      ],
      "Outputs": 1,
      "Description": "picks a string randomly from string list"
   },
   "sget": {
      "Args": [
         "index",
         "ftname"
      ],
      "Outputs": 1,
      "Description": "picks a string from a string list"
   },
   "rand": {
      "Args": [
         "min",
         "max"
      ],
      "Outputs": 1,
      "Description": "picks random number at start time"
   },
   "peaklim": {
      "Args": [
         "input",
         "atk",
         "rel",
         "thresh db"
      ],
      "Outputs": 1,
      "Description": "peak limiter"
   },
   "gen_rand": {
      "Args": [
         "name",
         "size",
         "args"
      ],
      "Outputs": 1,
      "Description": "random distribution generator"
   },
   "lsys": {
      "Args": [
         "trig",
         "ord",
         "code"
      ],
      "Outputs": 1,
      "Description": "L-Systems microlanguage"
   },
   "sdelay": {
      "Args": [
         "delay"
      ],
      "Outputs": 1,
      "Description": "delay (in samples)"
   },
   "slice": {
      "Args": [
         "trig",
         "id",
         "vals",
         "buf"
      ],
      "Outputs": 1,
      "Description": "in-memory slice based sampler"
   },
   "ref": {
      "Args": [
         "name"
      ],
      "Outputs": 1,
      "Description": "save pointer reference of next pipe in table"
   },
   "tprop": {
      "Args": [
         "trig",
         "bpm",
         "code"
      ],
      "Outputs": 1,
      "Description": "prop with a triggerable reset"
   },
   "fosc": {
      "Args": [
         "freq",
         "amp",
         "carrier",
         "modulator",
         "index",
         "table"
      ],
      "Outputs": 1,
      "Description": "FM oscillator"
   },
   "tport": {
      "Args": [
         "trig",
         "htime"
      ],
      "Outputs": 1,
      "Description": "Applies portamento to a signal with triggerable reset."
   },
   "incr": {
      "Args": [
         "trig",
         "step",
         "min",
         "max",
         "ival"
      ],
      "Outputs": 1,
      "Description": "Incrementer"
   },
   "palias": {
      "Args": [
         "name",
         "index"
      ],
      "Outputs": 1,
      "Description": "create a variable alias for p-value"
   },
   "gen_eval": {
      "Args": [
         "name",
         "size",
         "string"
      ],
      "Outputs": 1,
      "Description": "Evaluates sporth string to table"
   },
   "clock": {
      "Args": [
         "trig",
         "bpm",
         "subdiv"
      ],
      "Outputs": 1,
      "Description": "Clock with subdivisions and triggerable reset"
   },
   "fofilt": {
      "Args": [
         "in",
         "freq (1000)",
         "atk (0.007)",
         "rel (0.04)"
      ],
      "Outputs": 1,
      "Description": "Formant filter"
   },
   "diode": {
      "Args": [
         "in",
         "cutoff",
         "res"
      ],
      "Outputs": 1,
      "Description": "Diode ladder filter"
   },
   "saturator": {
      "Args": [
         "in",
         "drive",
         "dcoffset"
      ],
      "Outputs": 1,
      "Description": "saturator distortion unit"
   },
   "adsr": {
      "Args": [
         "gate",
         "attack",
         "decay",
         "sustain",
         "release"
      ],
      "Outputs": 1,
      "Description": "Analogue modelled ADSR generator"
   },
   "changed": {
      "Args": [
         "sig"
      ],
      "Outputs": 1,
      "Description": "Returns a trigger if the input changes"
   },
   "brown": {
      "Args": [
      ],
      "Outputs": 1,
      "Description": "Brownian noise generator"
   },
   "talias": {
      "Args": [
         "name",
         "index",
         "ftbl"
      ],
      "Outputs": 1,
      "Description": "alias a table value to a variable"
   },
   "rspline": {
      "Args": [
         "min",
         "max",
         "cps min",
         "cps max"
      ],
      "Outputs": 1,
      "Description": "random spline generator"
   },
   "voc": {
      "Args": [
         "freq",
         "pos",
         "diameter",
         "tenseness",
         "velum"
      ],
      "Outputs": 1,
      "Description": "Vocal Tract Physical Model"
   },
   "lpc": {
      "Args": [
         "in",
         "framesize"
      ],
      "Outputs": 1,
      "Description": "apply linear-predictive coding (LPC10) to signal"
   },
   "lpcsynth": {
      "Args": [
         "framesize",
         "ftbl"
      ],
      "Outputs": 1,
      "Description": "LPC synth. Manipulate parameters directly."
   },
   "talkbox": {
      "Args": [
         "source",
         "excitation",
         "quality"
      ],
      "Outputs": 1,
      "Description": "high-resolution vocoder"
   }
};


// store some DOM elements
var allTabContents = document.querySelectorAll(".tab");
var allTabThumbs = document.querySelectorAll(".thumb");
var mutexTabsArray = Array.from(document.querySelectorAll(".mutex"));
var output = document.getElementById('output');

// ========== TAB SWITCHING ==========
var allTabContents = document.querySelectorAll(".tab_content");
var allTabThumbs = document.querySelectorAll(".tab_thumb");
function tabClick(event) {
	event.preventDefault();
	document.querySelector('.active_content').classList.remove('active_content');
	document.querySelector('.active_thumb').classList.remove('active_thumb');
	document.querySelector(this.hash).classList.add('active_content');
	this.classList.add('active_thumb');
};
for (var i = 0; allTabThumbs[i]; i++) {
	allTabThumbs[i].addEventListener('click', tabClick);
}

var refContent = "";
Object.keys(ugen_ref).forEach(function(key) {
	refContent += "<b>" 
		+ key + "</b><div>" 
		+ ugen_ref[key]["Args"].join(", ")
		+ "<br><i>"
		+ ugen_ref[key]["Description"]
		+ "</i></div>";
});
var refElement = document.getElementById('quick_ref')
if (refElement) refElement.innerHTML = refContent;

// ========== EMSCRIPTEN ==========
var playButton = document.getElementById('c_play');
var playing = false;
var gotError;
var play = function () {
	gotError = false;
	playButton.classList.add("playing");
	sporthal_compile(editor.getValue().replace(/\t/g , " "));
	if (!playing && !gotError) {
		sporthal_start();
		playing = true;
	}
};
var stop = function() {
	if (playing) {
		sporthal_stop();
		playing = false;
		playButton.classList.remove("playing");
	}
};
var Module = {
	print: function(text) {
	},
	printErr: function(text) {
		showError(text);
		gotError = true;
		playButton.classList.remove("playing");
	},
	onRuntimeInitialized: function () {
		cwrap('sporthal_init', 'number')();
		sporthal_compile = cwrap('sporthal_compile', 'number', ['string']);
		sporthal_start = cwrap('sporthal_start', 'number');
		sporthal_stop = cwrap('sporthal_stop', 'number');
		Module.print("ready.")
		document.getElementById("play_loading").classList.add("nodisplay");
		playButton.classList.remove("nodisplay");
	},
};
var errorContainer = document.getElementById("errors");
function showError(err) {
	var errDiv = document.createElement("div");
	errDiv.textContent = err;
	errorContainer.appendChild(errDiv);
	tipDiv.classList.remove("on");
	window.setTimeout(function() {
		errorContainer.removeChild(errDiv);
	}, 3000);
}

// ========== EDITOR ==========
var ugenList = Object.keys(ugen_ref).map(function(index) { return index });
var ugenRegex = '(?:' + ugenList.join('|') + ')\\b';
CodeMirror.defineSimpleMode("sporth", {
  start: [
	// Rules are matched in the order in which they appear
	{regex: ugenRegex, token: "keyword"},
	{regex: /0x[a-f\d]+|[-+]?(?:\.\d+|\d+\.?\d*)(?:e[-+]?\d+)?/i, token: "number"},
	{regex: /#.*/, token: "comment"},
	{regex: /[-+\/*=<>!]+/, token: "operator"},
	// Sporth: treat strings as "variables"
	{regex: /[a-z$][\w$]*/, token: "variable"},
	{regex: /"(?:[^\\]|\\.)*?(?:"|$)/, token: "variable"},
  ]
});
var editorArea, editor;
var lastWord = "";
var tipDiv = document.getElementById("tooltip");
function updateTooltip() {
	var cmWord = editor.findWordAt(editor.getCursor());
	var word = editor.getRange(cmWord.anchor, cmWord.head);
	if (word == lastWord)
		return;
	lastWord = word;
	if (!(word in ugen_ref)) {
		tipDiv.classList.remove("on");
		return;
	}
	var info = ugen_ref[word];
	var out = "";
	if ("Args" in info) {
		out += info["Args"].join(", ") + " ";
	}
	out += "<b>" + word + "</b><br><i>" + info["Description"] + "</i>";
	updateTooltipPos();
	showTooltip(out);
}
function updateTooltipPos() {
	if(editor.cursorCoords().top > (editor.getScrollInfo().clientHeight * 0.5))
		tipDiv.classList.add("top");
	else
		tipDiv.classList.remove("top");
}
function showTooltip(txt) {
	if (errorContainer.childElementCount)
		return;
	tipDiv.innerHTML = txt;
	tipDiv.classList.add("on");
}
editorArea = document.querySelector('.left_pane textarea');
if (editorArea != null) {
	editor = CodeMirror.fromTextArea(editorArea, {
		mode: "sporth",
		lineNumbers: true,
		theme: "masher-light",
		extraKeys: {
			'Ctrl-Enter': play,
			'Ctrl-Space': stop,
		}
	});
	editor.on("keyHandled", updateTooltip);
	editor.on("cursorActivity", updateTooltip);
	editor.on("scroll", updateTooltipPos);
	editor.on("changes", function(cm) {
		changed = true;
	});
	editor.setSize("calc(100% - 51px)", "100%");
	window.onresize = function() {editor.refresh();};
}


// ========== CONTROLS ==========
if (editor) {
	document.getElementById('c_help').addEventListener('click', function() {
		document.body.classList.toggle("split");
		
		editor.refresh();
	});
	document.getElementById('c_play').addEventListener('click', function() {
		play();
	});
	document.getElementById('c_stop').addEventListener('click', function() {
		stop();
	});
}


// ========== AUTOSAVE ==========
var restoreLink = document.querySelector('.restore_link');
window.setInterval(autoSave, 10000);
var changed = false;
function autoSave() {
	if (changed) {
		localStorage.setItem('AudioMasher_last_patch', editor.getValue());
		changed = false;
		restoreLink.classList.remove("on");
	}
}
if (localStorage.getItem('AudioMasher_last_patch') != null)
	restoreLink.classList.add("on");
function restoreAutosave() {
	editor.setValue(localStorage.getItem('AudioMasher_last_patch'));
	restoreLink.classList.remove("on");
}


// ========== MODALS ==========
function setupModal(cfg, parent) {
	var m = {};
	m.show = function(event) {
		event.preventDefault();
		m.front.innerHTML = cfg.content;
		m.progress = document.getElementById("modal_progress");
		m.form = document.querySelector("#modal_front form");
		m.cross = document.getElementById("close_modal");
		if (editor && m.form) {
			var contentSender = document.createElement("input");
			contentSender.type = "hidden";
			contentSender.name = "main_script";
			contentSender.value = editor.getValue();
			m.form.appendChild(contentSender);
		}
		// add modal's event listeners
		document.body.addEventListener('keyup', m.handleEsc);
		m.cross.addEventListener('click', m.hide);
		m.back.addEventListener('click', m.hide);
		if (m.form) m.form.addEventListener('submit', m.submit);
		// show it once everything is set up
		m.back.classList.add("on");
		m.front.classList.add("on");
		var firstInput = m.form.querySelectorAll("input")[0]
		if (firstInput) firstInput.focus();
		setupModals(m.front);
		if(cfg.onReady)
			cfg.onReady(m);
	};
	m.hide = function(event) {
		event.preventDefault();
		m.back.classList.remove("on");
		m.front.classList.remove("on");
		// remove modal's event listeners
		document.body.removeEventListener('keyup', m.handleEsc);
		m.cross.removeEventListener('click', m.hide);
		m.back.removeEventListener('click', m.hide);
		if (m.form) m.form.removeEventListener('submit', m.submit);
	};
	m.handleEsc = function(event) {
		if (event.keyCode == 27) // esc
			m.hide(event);
	};
	m.submit = function(event) {
		event.preventDefault();
		// send ajax request
		m.progress.innerHTML = "sending request...";
		fetch(cfg.postURL, {
			method: 'post',
			credentials: 'include',
			body: new FormData(m.form)
		}).then(function(response) {
			return response.json();
		}).then(function(data) {
			m.result = data
			if (!m.result.success || cfg.alwaysConfirm)
				alert(m.result.message);
			m.progress.innerHTML = "&nbsp;";
			if(m.result.success)
				cfg.onSuccess(m);
		});
	};
	m.back = document.getElementById("modal_back");
	m.front = document.getElementById("modal_front");
	var triggerLinks = parent.querySelectorAll(cfg.triggerLinks);
	for (var i = 0; triggerLinks[i]; i++) {
		triggerLinks[i].addEventListener('click', m.show);
	}
}
function setupModals(parent) {
	for (var i = 0; modals[i]; i++) {
		setupModal(modals[i], parent)
	}
}

modals = [
	{
		triggerLinks: "a[href='#login_modal']",
		content: 
			'<h2>Log in</h2>'+
			'<a id=close_modal>[close]</a>'+
			'<form>'+
			'<div class="label">username:</div>'+
			'<input type=text name=username><br>'+
			'<br>'+
			'<div class="label">password:</div>'+
			'<input type=password name=password><br>'+
			'<br><hr><center>'+
			'<input type=submit value=OK><br>'+
			'</form>'+
			'<div id=modal_progress>&nbsp;</div><br></center>'+
			'<center>or <a href="#signup_modal">create an account</a></center>',
		postURL: "/api/login",
		onSuccess: function(modal) { location = "/continue"; },
	},
	{
		triggerLinks: "a[href='#signup_modal']",
		content: 
			'<h2>Create Account</h2>'+
			'<a id=close_modal>[close]</a>'+
			'Create an account in order to post patches.<br><br>'+
			'<form>'+
			'<div class="label">username:</div>'+
			'<input type=text name=username><br>'+
			'<br>'+
			'<div class="label">password:</div>'+
			'<input type=password name=password><br>'+
			'<br>'+
			'<div class="label">email (optional):</div>'+
			'<input type=text name=email><br>'+
			'<br><hr><center>'+
			'<input type=submit value="create account"><br>'+
			'</form>'+
			'<div id=modal_progress>&nbsp;</div><br></center>'+
			'<center>or <a href="#login_modal">log in</a></center>',
		postURL: "/api/signup",
		onSuccess: function(modal) { location = "/continue"; },
		alwaysConfirm: true,
	},
	{
		triggerLinks: "a[href='#post_modal']",
		content: 
			'<h2>Post Patch</h2>'+
			'<a id=close_modal>[close]</a>'+
			'<form>'+
			'Title:<br>'+
			'<input type=text name=title id=formtitle><br>'+
			'Description:<br>'+
			'<textarea name=desc id=formdesc></textarea><br>'+
			'<br><hr><center>'+
			'<input type=submit value=OK><br>'+
			'</form>'+
			'<div id=modal_progress>&nbsp;</div><br></center>',
		postURL: "/api/post",
		onReady: function(modal) {
			if (document.getElementById("PTitle")) {
				document.getElementById("formtitle").value = document.getElementById("PTitle").textContent;
				document.getElementById("formdesc").value = "Fork of " + 
					document.getElementById("PTitle").textContent +
					" by " +
					document.getElementById("PAuthor").textContent;
			}
		},
		onSuccess: function(modal) { location = "/patch/" + modal.result.patchId; },
		alwaysConfirm: true,
	},
	{
		triggerLinks: "a[href='#update_modal']",
		content: 
			'<h2>Update Patch</h2>'+
			'<a id=close_modal>[close]</a>'+
			'<form>'+
			'Title:<br>'+
			'<input type=text name=title id=formtitle><br>'+
			'Description:<br>'+
			'<textarea name=desc id=formdesc></textarea><br>'+
			'<br><hr><center>'+
			'<input type=hidden name=update_id id=formid>'+
			'<input type=submit value=OK><br>'+
			'</form>'+
			'<div id=modal_progress>&nbsp;</div><br></center>'+
			'<center>or <a href="#post_modal">post as a new patch</a></center>',
		postURL: "/api/update",
		onReady: function(modal) {
			document.getElementById("formtitle").value = document.getElementById("PTitle").textContent;
			document.getElementById("formdesc").value = document.getElementById("PDesc").textContent;
			document.getElementById("formid").value = document.getElementById("PId").textContent;
		},
		onSuccess: function(modal) { location = "/patch/" + modal.result.patchId; },
		alwaysConfirm: true,
	},
];


setupModals(document);









